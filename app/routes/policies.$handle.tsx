import type {Shop} from '@shopify/hydrogen/storefront-api-types';
import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';
import type {
  PoliciesQuery,
  PoliciesQueryVariables,
} from 'types/generated/admin';

import {useLoaderData} from '@remix-run/react';
import {head} from 'ramda';

import {Breadcrumb} from '~/components/global/breadcrumb';
import {DateTime} from '~/components/resources/date-time';
import {buttonVariants} from '~/components/ui/button';
import {Icons} from '~/components/ui/icons';
import {Link} from '~/components/ui/link';
import {Prose} from '~/components/ui/prose';
import {POLICIES_QUERY} from '~/graphql/admin/queries';
import {JsonSchema} from '~/seo/json-schema';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {policiesSeo} from '~/seo/policies';
import {cn, notFound} from '~/utils/helpers';
import {createPoliciesUrl} from '~/utils/shopify';

type SelectedPolicies = keyof Pick<
  Shop,
  'privacyPolicy' | 'refundPolicy' | 'shippingPolicy' | 'termsOfService'
>;

const defaultFalsyParams = {
  privacyPolicy: false,
  refundPolicy: false,
  shippingPolicy: false,
  termsOfService: false,
};

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const {admin, shopify, storefront} = context;
  const policyName = params.handle?.replace(
    /-([a-z])/g,
    (_: unknown, m1: string) => m1.toUpperCase(),
  ) as SelectedPolicies;

  const [{shop}, data] = await Promise.all([
    storefront.query(POLICY_CONTENT_QUERY, {
      variables: {...defaultFalsyParams, [policyName]: true},
    }),
    admin.query<PoliciesQuery, PoliciesQueryVariables>(POLICIES_QUERY),
  ]);

  const policies = data.shop.shopPolicies;
  const policy = shop?.[policyName];

  const currentPolicy = head(
    (policies || []).filter((p) => p.id === policy?.id),
  );

  if (!policy) throw notFound('Policy not found');

  const {jsonLd, listItems, seo} = policiesSeo({policy, request, shopify});

  return {
    createdAt: currentPolicy?.createdAt,
    jsonLd,
    listItems,
    policy,
    seo,
    updatedAt: currentPolicy?.updatedAt,
  };
}

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function Policy() {
  const options = {dateStyle: 'full', timeStyle: 'long'} as const;
  const {createdAt, jsonLd, listItems, policy, updatedAt} =
    useLoaderData<typeof loader>();

  return (
    <>
      <JsonSchema jsonLd={jsonLd} />
      <Breadcrumb listItems={listItems} />

      <section className="container">
        <p>
          Data de vigência:{' '}
          <DateTime className="font-bold" date={createdAt} options={options} />
        </p>

        <Prose html={policy.body} />

        <p>
          Esta política foi revisada e atualizada pela última vez em:{' '}
          <DateTime className="font-bold" date={updatedAt} options={options} />
        </p>

        <div className="my-6 flex items-center justify-center">
          <Link
            ariaLabel="Voltar para políticas"
            className={cn(buttonVariants({size: 'sm', variant: 'outline'}))}
            title="Políticas"
            to={createPoliciesUrl()}
          >
            <Icons.Lucide.ArrowLeft size={16} />
            <span>Voltar para políticas</span>
          </Link>
        </div>
      </section>
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/Shop
const POLICY_CONTENT_QUERY = `#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
` as const;
