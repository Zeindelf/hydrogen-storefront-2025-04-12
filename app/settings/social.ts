import type {InspectorGroup} from '@weaverse/hydrogen';

export const socialMediaSchema: InspectorGroup['inputs'] = [
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
