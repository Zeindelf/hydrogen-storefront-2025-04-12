import appleTouchIconUrl from '~/assets/favicons/apple-touch-icon.png';
import favicon96 from '~/assets/favicons/favicon-96x96.png';
import faviconIco from '~/assets/favicons/favicon.ico';
import faviconSvg from '~/assets/favicons/favicon.svg';
import {mimetypes} from '~/utils/helpers';

/** https://realfavicongenerator.net/ */
export const generateFaviconUrls = () => {
  return [
    {
      href: favicon96,
      rel: 'icon',
      sizes: '96x96',
      type: mimetypes.png,
    },
    {
      href: faviconSvg,
      rel: 'icon',
      type: mimetypes.svg,
    },
    {
      href: faviconIco,
      rel: 'shortcut icon',
      tagName: 'link',
      type: mimetypes.ico,
    },
    {
      href: appleTouchIconUrl,
      rel: 'apple-touch-icon',
      sizes: '180x180',
      tagName: 'link',
    },
    {
      href: appleTouchIconUrl,
      rel: 'apple-touch-icon-precomposed',
      sizes: '180x180',
      tagName: 'link',
    },
  ];
};
