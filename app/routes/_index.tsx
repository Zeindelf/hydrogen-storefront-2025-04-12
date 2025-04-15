import type {MetaFunction} from '@remix-run/react';
import type {SeoConfig} from '@shopify/hydrogen';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {Link} from '~/components/ui/link';
import {Text} from '~/layout/text';
import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {createCollectionUrl, createProductUrl} from '~/utils/shopify';
import {WeaverseContent} from '~/weaverse';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

const loadCriticalData = async ({context}: LoaderFunctionArgs) => {
  const {shopify, weaverse} = context;

  const [weaverseData] = await Promise.all([
    weaverse.loadPage({type: 'INDEX'}),
  ]);

  const seo: SeoConfig = {
    title: shopify.name,
    titleTemplate: '%s | Shop short description',
  };

  return {
    seo,
    weaverseData,
  };
};

const loadDeferredData = (_: LoaderFunctionArgs) => ({});

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function HomepageRoute() {
  return (
    <>
      <div className="flex gap-4">
        <Link
          ariaLabel=""
          prefetch="intent"
          to={createCollectionUrl('lancamentos')}
        >
          Collection
        </Link>
        <Link
          ariaLabel=""
          prefetch="intent"
          to={createProductUrl('saia-curta-feminina-em-malha-matelasse-rosa')}
        >
          Product
        </Link>
      </div>

      <Text textSize="2xl" weight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea
        repellendus commodi vel, dolor laboriosam officia et, voluptates
        temporibus dolore quos sunt autem beatae, obcaecati ipsum quas corrupti
        iste quis!
      </Text>
      <hr />
      <WeaverseContent />
    </>
  );
}
