import type {InspectorGroup} from '@weaverse/hydrogen';

export const newsletterSchema: InspectorGroup['inputs'] = [
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
