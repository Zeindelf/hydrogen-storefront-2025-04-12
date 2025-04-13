import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {Prose} from '~/components/ui/prose';
import {
  GENERIC_FILE_FRAGMENT,
  MEDIA_FRAGMENT,
  METAFIELD_FRAGMENT,
} from '~/graphql/storefront/fragments';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {pageSeo} from '~/seo/page';
import {notFound} from '~/utils/helpers';

export async function loader({context, params, request}: LoaderFunctionArgs) {
  if (!params.handle) {
    throw new Error('Missing page handle');
  }

  const [{page}] = await Promise.all([
    context.storefront.query(PAGE_QUERY, {
      variables: {handle: params.handle},
    }),
  ]);

  if (!page) throw notFound('Page not found');

  const {listItems, seo} = pageSeo({page, request});

  return {listItems, page, seo};
}

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function PagesRoute() {
  const {listItems, page} = useLoaderData<typeof loader>();

  return (
    <>
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <h1>{page.title}</h1>

        <Prose html={page.body} />
      </section>
    </>
  );
}

const PAGE_QUERY = `#graphql
  fragment Page on Page {
    id
    title
    body
    handle
    pageSeo: seo {
      description
      title
    }
    pageImage: metafield(namespace: "page", key: "image") {
      ...Metafield
    }
  }

  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  ) @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      ...Page
    }
  }

  ${METAFIELD_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${GENERIC_FILE_FRAGMENT}
` as const;
