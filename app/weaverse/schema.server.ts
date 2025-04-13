import type {HydrogenThemeSchema, InspectorGroup} from '@weaverse/hydrogen';

import pkg from '../../package.json';

const newsletterSchema: InspectorGroup['inputs'] = [
  {
    label: 'Newsletter',
    type: 'heading',
  },
  {
    defaultValue: 'STAY IN TOUCH',
    label: 'Title',
    name: 'newsletterTitle',
    placeholder: 'Stay in touch',
    type: 'text',
  },
  {
    defaultValue: 'News and inspiration in your inbox, every week.',
    label: 'Description',
    name: 'newsletterDescription',
    type: 'text',
  },
  {
    defaultValue: 'Please enter your email',
    label: 'Input placeholder',
    name: 'newsletterPlaceholder',
    placeholder: 'Please enter your email',
    type: 'text',
  },
  {
    defaultValue: 'Send',
    label: 'Button text',
    name: 'newsletterButtonText',
    placeholder: 'Send',
    type: 'text',
  },
];

const socialMediaSchema: InspectorGroup['inputs'] = [
  {
    label: 'Social links',
    type: 'heading',
  },
  {
    defaultValue: 'https://www.instagram.com',
    label: 'Instagram',
    name: 'socialInstagram',
    type: 'text',
  },
  {
    defaultValue: 'https://x.com',
    label: 'X (formerly Twitter)',
    name: 'socialX',
    type: 'text',
  },
  {
    defaultValue: 'https://www.linkedin.com',
    label: 'LinkedIn',
    name: 'socialLinkedIn',
    type: 'text',
  },
  {
    defaultValue: 'https://www.facebook.com',
    label: 'Facebook',
    name: 'socialFacebook',
    type: 'text',
  },
];

const storeInformationSchema: InspectorGroup['inputs'] = [
  {
    label: 'Store information',
    type: 'heading',
  },
  {
    defaultValue: 'OUR SHOP',
    label: 'Title',
    name: 'addressTitle',
    placeholder: 'Our shop',
    type: 'text',
  },
  {
    defaultValue: '301 Front St W, Toronto, ON M5V 2T6, Canada',
    label: 'Address',
    name: 'storeAddress',
    placeholder: '301 Front St W, Toronto, ON M5V 2T6, Canada',
    type: 'text',
  },
  {
    defaultValue: 'contact@my-store.com',
    label: 'Email',
    name: 'storeEmail',
    placeholder: 'contact@my-store.com',
    type: 'text',
  },
];

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
