import type {ShopifyAnalyticsProduct} from '@shopify/hydrogen';
import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {
  Await,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import {
  Analytics,
  AnalyticsPageType,
  flattenConnection,
  getAdjacentAndFirstAvailableVariants,
  getSelectedProductOptions,
  useOptimisticVariant,
} from '@shopify/hydrogen';
import {data} from '@shopify/remix-oxygen';
import * as React from 'react';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {SkipLink} from '~/components/resources/skip-link';
import {
  MEDIA_FRAGMENT,
  PRICE_RANGE_FRAGMENT,
  PRODUCT_ITEM_FRAGMENT,
  PRODUCT_VARIANT_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {Errors} from '~/pages/errors';
import {JsonSchema} from '~/seo/json-schema';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {createOgContent, productSeo} from '~/seo/product';
import {logger, notFound} from '~/utils/helpers';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async (args: LoaderFunctionArgs) => {
  const {context, params, request} = args;
  const {navigation, storefront} = context;

  if (!params.handle) throw notFound('Product Not Found');

  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: params.handle,
      selectedOptions: getSelectedProductOptions(request),
    },
  });

  const catchData = {
    description: 'Dynamic from catch data - 404',
    title: 'Produto não encontrado',
  };

  if (!product?.id) {
    throw data(catchData, {status: 404});
  }

  const initialVariant = product.selectedOrFirstAvailableVariant;
  const selectedOptions = initialVariant?.selectedOptions;

  const {images: productImages} = product;
  const images = flattenConnection(productImages);

  const {jsonLd, listItems, seo} = productSeo({navigation, product, request});

  const productAnalytics: ShopifyAnalyticsProduct = {
    brand: product.vendor,
    name: product.title,
    price: product.selectedOrFirstAvailableVariant?.price.amount || '',
    productGid: product.id,
    variantGid: product.selectedOrFirstAvailableVariant?.id,
    variantName: product.selectedOrFirstAvailableVariant?.title,
  };

  return {
    analytics: {
      pageType: AnalyticsPageType.product,
      products: [productAnalytics],
      resourceId: product.id,
      totalValue: parseFloat(
        product.selectedOrFirstAvailableVariant?.price.amount || '0',
      ),
    },
    images,
    jsonLd,
    listItems,
    navigation,
    product,
    selectedOptions,
    seo,
  };
};

const loadDeferredData = ({context, params}: LoaderFunctionArgs) => {
  const {storefront} = context;

  const recommendationsPromise = storefront
    .query(GET_PRODUCTS_RECOMMENDATIONS, {
      variables: {handle: params.handle ?? ''},
    })
    .catch((error) => console.error('[ProductsRecommendations]: ', error));

  return {recommendationsPromise};
};

export const meta: MetaFunction<typeof loader> = mergeMeta(
  ({data, matches}) => {
    const product = data?.product;

    return [...createOgContent(product), ...getSeoMetaFromMatches(matches)];
  },
);

export default function ProductRoute() {
  const {jsonLd, listItems, product, recommendationsPromise} =
    useLoaderData<typeof loader>();

  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  return (
    <>
      <SkipLink text="Pular para informações do produto" to="#ProductInfo" />

      <JsonSchema jsonLd={jsonLd} />
      <Breadcrumb listItems={listItems} />

      <div className="container">
        <section className="lg:w-8/12 relative">
          <p>PRODUC_IMAGE</p>
        </section>

        <section className="lg:w-4/12 ml-auto">
          <article>
            <h1>{product.title}</h1>
          </article>
        </section>
      </div>

      <React.Suspense>
        <Await resolve={recommendationsPromise}>
          {(data) => {
            logger.log({data});
            return null;
          }}
        </Await>
      </React.Suspense>

      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              price: selectedVariant?.price?.amount ?? '0',
              quantity: 1,
              title: product.title,
              variantId: selectedVariant?.id ?? '',
              variantTitle: selectedVariant?.title ?? '0',
              vendor: product.vendor,
            },
          ],
        }}
      />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const {description, title} = error.data;

    return (
      <>
        <Errors.NotFound description={description} title={title} />
      </>
    );
  }

  return <Errors.ErrorFallback />;
}

export const PRODUCT_QUERY = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    tags
    availableForSale
    isGiftCard
    productType
    createdAt
    updatedAt
    encodedVariantExistence
    encodedVariantAvailability
    ...PriceRange
    images(first: 250) {
      nodes {
        __typename
        altText
        height
        id
        url
        width
      }
    }
    options {
      id
      name
      optionValues {
        id
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            ...Media
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(
      selectedOptions: $selectedOptions
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    productSeo: seo {
      title
      description
    }
    collections(first: 250) {
      nodes {
        id
        title
        handle
      }
    }
  }

  query Product(
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    product(handle: $handle) {
      ...Product
    }
  }

  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRICE_RANGE_FRAGMENT}
  ${MEDIA_FRAGMENT}
` as const;

const GET_PRODUCTS_RECOMMENDATIONS = `#graphql
  fragment ComplementaryProduct on Product {
    id
    handle
    title
    selectedOrFirstAvailableVariant(
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      ...ProductVariant
    }
  }

  query GetProductRecommendations(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    recommendations: productRecommendations(
      productHandle: $handle
      intent: RELATED
    ) {
      ...ProductItem
    }
    complementary: productRecommendations(
      productHandle: $handle
      intent: COMPLEMENTARY
    ) {
      ...ComplementaryProduct
    }
  }

  ${PRODUCT_ITEM_FRAGMENT}
  ${PRICE_RANGE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const _GET_VARIANTS_QUERY = `#graphql
  query GetVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      variants(first: 250) {
        nodes {
          ...ProductVariant
        }
      }
    }
  }

  ${PRODUCT_VARIANT_FRAGMENT}
` as const;
