import type {HydrogenComponentSchema} from '@weaverse/hydrogen';

import {forwardRef} from 'react';

import type {SectionProps} from '~/layout/section';

import {layoutInputs, Section} from '~/layout/section';

const CollectionList = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {children, ...rest} = props;
  return (
    <Section ref={ref} {...rest}>
      {children}
    </Section>
  );
});

export default CollectionList;

export const schema: HydrogenComponentSchema = {
  childTypes: ['subheading', 'heading', 'paragraph'],
  // enabledOn: {
  //   pages: ['COLLECTION_LIST'],
  // },
  inspector: [
    {
      group: 'Layout',
      inputs: layoutInputs,
    },
  ],
  limit: 1,
  presets: {
    children: [
      {
        content: 'Collections',
        type: 'heading',
      },
      {
        imageAspectRatio: 'adapt',
        nextButtonText: 'Next',
        prevButtonText: 'Previous',
        type: 'collections-items',
      },
    ],
    gap: 60,
  },
  title: 'Collection list',
  type: 'collection-list',
};
