import type {SeoConfig} from '@shopify/hydrogen';
import type {PartialImage} from 'types/shopify';

export const createMedia = (image?: null | PartialImage) => {
  const media: SeoConfig['media'] = {
    altText: image?.altText,
    height: image?.height,
    type: 'image',
    url: image?.url,
    width: image?.width,
  };

  return {media};
};
