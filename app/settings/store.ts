import type {InspectorGroup} from '@weaverse/hydrogen';

export const storeInformationSchema: InspectorGroup['inputs'] = [
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
