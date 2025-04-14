import type {HydrogenThemeSchema} from '@weaverse/hydrogen';

import pkg from '../../package.json';
import {newsletterSchema} from './settings/newsletter';
import {socialMediaSchema} from './settings/social';
import {storeInformationSchema} from './settings/store';

export const themeSchema: HydrogenThemeSchema = {
  defaultLocale: 'pt-br',
  info: {
    author: 'Zeindelf',
    authorProfilePhoto:
      'https://cdn.shopify.com/s/files/1/0838/0052/3057/files/Weaverse_logo_-_3000x_e2fa8c13-dac2-4dcb-a2c2-f7aaf7a58169.png?v=1698245759',
    documentationUrl: 'https://weaverse.io/docs',
    name: 'Weaverse',
    supportUrl: 'https://weaverse.io/contact',
    version: pkg.version,
  },
  inspector: [
    {
      group: 'Footer',
      inputs: [
        {
          label: 'Footer map',
          name: 'footerMap',
          type: 'map-autocomplete',
        },
        {
          label: 'Footer position',
          name: 'footerPosition',
          type: 'position',
        },
        {
          label: 'Footer metaobject',
          name: 'footerMetaobject',
          type: 'metaobject',
        },
        {
          label: 'Footer collection',
          name: 'footerCollection',
          type: 'collection',
        },
        {
          label: 'Footer product',
          name: 'footerProduct',
          type: 'product',
        },
        {
          label: 'Footer product list',
          name: 'footerProductList',
          type: 'product-list',
        },
        {
          defaultValue:
            '<p>We are a team of designers, developers, and creatives who are passionate about creating beautiful and functional products.</p>',
          label: 'Store bio',
          name: 'bio',
          type: 'richtext',
        },
        ...socialMediaSchema,
        ...storeInformationSchema,
        ...newsletterSchema,
        {
          defaultValue: '© 2024 Weaverse. All rights reserved.',
          label: 'Copyright text',
          name: 'copyright',
          type: 'richtext',
        },
      ],
    },
  ],
};
