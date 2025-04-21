import type {HydrogenComponent} from '@weaverse/hydrogen';

/** Layouts */
import * as Heading from '~/layout/heading/title';
import * as Paragraph from '~/layout/text/paragraph';
import {ButtonComponents} from '~/sections/button';
import {CollectionListComponents} from '~/sections/collection-list';
import {RichTextComponents} from '~/sections/rich-text';
/** Sections */
import {SlideshowComponents} from '~/sections/slideshow';
import * as Spacer from '~/sections/spacer';

export const components: HydrogenComponent[] = [
  Heading,
  Spacer,
  Paragraph,
  ...ButtonComponents,
  ...CollectionListComponents,
  ...SlideshowComponents,
  ...RichTextComponents,
];
