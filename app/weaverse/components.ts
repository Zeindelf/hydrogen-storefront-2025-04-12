import type {HydrogenComponent} from '@weaverse/hydrogen';

import * as Paragraph from '~/layout/text/paragraph';
import * as CollectionList from '~/sections/collection-list';
import * as Heading from '~/sections/heading';
import * as Spacer from '~/sections/spacer';
import * as SubHeading from '~/sections/subheading';

export const components: HydrogenComponent[] = [
  Heading,
  SubHeading,
  Spacer,
  Paragraph,
  CollectionList,
];
