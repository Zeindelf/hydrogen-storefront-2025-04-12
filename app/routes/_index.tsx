import type {MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {WeaverseContent} from '~/weaverse';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [weaverseData] = await Promise.all([
    context.weaverse.loadPage({type: 'INDEX'}),
  ]);

  return {
    weaverseData,
  };
}

function loadDeferredData(_: LoaderFunctionArgs) {
  return {};
}

export default function Homepage() {
  return <WeaverseContent />;
}
