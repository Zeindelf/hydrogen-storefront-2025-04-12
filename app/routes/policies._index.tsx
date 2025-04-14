import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';
import type {PoliciesQuery} from 'types/generated/storefront';
import type {PoliciesPath} from 'types/shopify';

import {Link, useLoaderData} from '@remix-run/react';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {JsonSchema} from '~/seo/json-schema';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {policiesSeo} from '~/seo/policies';
import {notFound} from '~/utils/helpers';
import {createPoliciesUrl} from '~/utils/shopify';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async ({context, request}: LoaderFunctionArgs) => {
  const {shopify, storefront} = context;

  const data = await storefront.query<PoliciesQuery>(POLICIES_QUERY);

  const policies = Object.values(data.shop || {});

  if (!policies.length) throw notFound('No policies found');

  const {jsonLd, listItems, seo} = policiesSeo({request, shopify});

  return {jsonLd, listItems, policies, seo};
};

const loadDeferredData = (_: LoaderFunctionArgs) => ({});

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function PoliciesRoute() {
  const {jsonLd, listItems, policies} = useLoaderData<typeof loader>();

  return (
    <>
      <JsonSchema jsonLd={jsonLd} />
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <h1>Políticas</h1>

        <div>
          {policies.map((policy) => {
            if (!policy) return null;

            return (
              <fieldset key={policy.id}>
                <Link
                  prefetch="intent"
                  to={createPoliciesUrl(policy.handle as PoliciesPath)}
                >
                  {policy.title}
                </Link>
              </fieldset>
            );
          })}
        </div>
      </section>
    </>
  );
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }

  query Policies (
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
` as const;
