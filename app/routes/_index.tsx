import type {MetaFunction} from '@remix-run/react';
import type {SeoConfig} from '@shopify/hydrogen';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {getSeoMetaFromMatches, mergeMeta} from '~/seo/meta';
import {WeaverseContent} from '~/weaverse';

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: LoaderFunctionArgs) {
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
}

function loadDeferredData(_: LoaderFunctionArgs) {
  return {};
}

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export default function Homepage() {
  return <WeaverseContent />;
}
