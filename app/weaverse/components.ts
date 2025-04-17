import type {HydrogenComponent} from '@weaverse/hydrogen';

/** Layouts */
import * as Heading from '~/layout/heading/title';
import * as Paragraph from '~/layout/text/paragraph';
/** Sections */
import * as CollectionList from '~/sections/collection-list';
import * as Slideshow from '~/sections/slideshow/slideshow';
import * as SlideshowSlide from '~/sections/slideshow/slideshow-slide';
import * as Spacer from '~/sections/spacer';
import * as SubHeading from '~/sections/subheading';

export const components: HydrogenComponent[] = [
  Heading,
  SubHeading,
  Spacer,
  Paragraph,
  CollectionList,
  Slideshow,
  SlideshowSlide,
];
