import type {HydrogenComponent} from '@weaverse/hydrogen';

import * as Heading from './sections/heading';
import * as Paragraph from './sections/paragraph';
import * as Spacer from './sections/spacer';
import * as SubHeading from './sections/subheading';

export const components: HydrogenComponent[] = [
  Heading,
  Paragraph,
  SubHeading,
  Spacer,
];
