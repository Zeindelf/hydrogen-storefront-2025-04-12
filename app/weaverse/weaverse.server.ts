import type {WeaverseClientArgs} from '@weaverse/hydrogen';

import {WeaverseClient} from '@weaverse/hydrogen';

import {components} from '~/weaverse/components';
import {themeSchema} from '~/weaverse/schema.server';

export function createWeaverseClient(
  args: Omit<WeaverseClientArgs, 'components' | 'themeSchema'>,
) {
  return new WeaverseClient({
    ...args,
    components,
    themeSchema,
  });
}

export function getWeaverseCsp(request: Request) {
  const url = new URL(request.url);
  // Get weaverse host from query params
  const weaverseHost = url.searchParams.get('weaverseHost');
  const isDesignMode = url.searchParams.get('weaverseHost');
  const weaverseHosts = ['*.weaverse.io', '*.shopify.com', '*.myshopify.com'];
  if (weaverseHost) {
    weaverseHosts.push(weaverseHost);
  }
  const updatedCsp: {
    [x: string]: boolean | string | string[];
  } = {
    connectSrc: ['https://vimeo.com', ...weaverseHosts],
    defaultSrc: [
      'data:',
      '*.youtube.com',
      '*.youtu.be',
      '*.vimeo.com',
      '*.google.com',
      'fonts.gstatic.com',
      ...weaverseHosts,
    ],
    styleSrc: ['fonts.googleapis.com', ...weaverseHosts],
  };
  if (isDesignMode) {
    updatedCsp.frameAncestors = ['*'];
  }
  return updatedCsp;
}
