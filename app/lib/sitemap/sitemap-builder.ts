type Changefreq =
  | 'always'
  | 'daily'
  | 'hourly'
  | 'monthly'
  | 'never'
  | 'weekly'
  | 'yearly';

export type AlternateRef = {
  href: string;
  hrefIsAbsolute?: boolean;
  hreflang: string;
};

export type ImageEntry = {
  caption?: string;
  geoLocation?: string;
  license?: URL;
  loc: string | URL;
  title?: string;
};

export type GoogleNewsEntry = {
  date: Date | string;
  publicationLanguage: string;
  publicationName: string;
  title: string;
};

export type Restriction = {
  content: string;
  relationship: 'allow' | 'deny';
};

export type VideoEntry = {
  contentLoc?: URL;
  description: string;
  duration?: number;
  expirationDate?: Date | string;
  familyFriendly?: boolean;
  live?: boolean;
  platform?: Restriction;
  playerLoc?: URL;
  publicationDate?: Date | string;
  rating?: number;
  requiresSubscription?: boolean;
  restriction?: Restriction;
  tag?: string;
  thumbnailLoc: URL;
  title: string;
  uploader?: {
    info?: URL;
    name: string;
  };
  viewCount?: number;
};

export type SitemapField = {
  alternateRefs?: Array<AlternateRef>;
  changefreq?: Changefreq;
  images?: Array<ImageEntry>;
  lastmod?: string;
  loc: string;
  news?: GoogleNewsEntry;

  priority?: number;
  trailingSlash?: boolean;
  videos?: Array<VideoEntry>;
};

/**
 * Builder class to generate xml and robots.txt
 * Returns only string values
 */
export class SitemapBuilder {
  /**
   * Generate alternate refs.xml
   * @param alternateRefs
   * @returns
   */
  buildAlternateRefsXml(alternateRefs: Array<AlternateRef> = []): string {
    return alternateRefs
      .map((alternateRef) => {
        return `<xhtml:link rel="alternate" hreflang="${alternateRef.hreflang}" href="${alternateRef.href}"/>`;
      })
      .join('');
  }

  /**
   * Generate Image sitemap entry
   * @param image
   * @returns string
   */
  buildImageXml(image: ImageEntry): string {
    // using array just because it looks more structured
    if (!image || !image.loc) {
      return '';
    }
    return [
      `<image:image>`,
      ...[
        `<image:loc>${entityEscapedUrl(
          typeof image.loc === 'string' ? image.loc : image.loc.href,
        )}</image:loc>`,
        image.caption &&
          `<image:caption>${this.escapeHtml(image.caption)}</image:caption>`,
        image.title &&
          `<image:title>${this.escapeHtml(image.title)}</image:title>`,
        image.geoLocation &&
          `<image:geo_location>${this.escapeHtml(
            image.geoLocation,
          )}</image:geo_location>`,
        image.license &&
          `<image:license>${entityEscapedUrl(
            image.license.href,
          )}</image:license>`,
      ],
      `</image:image>`,
    ]
      .filter(Boolean)
      .join('');
  }

  /**
   * Generate Google News sitemap entry
   * @param news
   * @returns string
   */
  buildNewsXml(news: GoogleNewsEntry): string {
    // using array just because it looks more structured
    return [
      `<news:news>`,
      ...[
        `<news:publication>`,
        ...[
          `<news:name>${this.escapeHtml(news.publicationName)}</news:name>`,
          `<news:language>${news.publicationLanguage}</news:language>`,
        ],
        `</news:publication>`,
        `<news:publication_date>${this.formatDate(
          news.date,
        )}</news:publication_date>`,
        `<news:title>${this.escapeHtml(news.title)}</news:title>`,
      ],
      `</news:news>`,
    ]
      .filter(Boolean)
      .join('');
  }

  /**
   * Generates sitemap-index.xml
   * @param allSitemaps
   * @returns
   */
  buildSitemapIndexXml(allSitemaps: string[]) {
    return [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...(allSitemaps?.map((x) => `<sitemap><loc>${x}</loc></sitemap>`) ?? []),
      '</sitemapindex>',
    ].join('\n');
  }

  /**
   * Generates sitemap.xml
   * @param fields
   * @returns
   */
  buildSitemapXml(fields: SitemapField[]): string {
    const content = fields
      .map((x: SitemapField) => {
        // Normalize sitemap field keys to stay consistent with <xsd:sequence> order
        const field = this.normalizeSitemapField(x);

        // Field array to keep track of properties
        const fieldArr: Array<string> = [];
        const keys = Object.keys(field) as Array<keyof typeof field>;

        // Iterate all object keys and key value pair to field-set
        for (const key of keys) {
          // Skip reserved keys
          if (['trailingSlash'].includes(key)) {
            continue;
          }

          if (field[key]) {
            if (key === 'alternateRefs') {
              const altRefField = this.buildAlternateRefsXml(
                field.alternateRefs,
              );

              fieldArr.push(altRefField);
            } else if (key === 'news') {
              if (field.news) {
                const newsField = this.buildNewsXml(field.news);
                fieldArr.push(newsField);
              }
            } else if (key === 'images') {
              if (field.images) {
                for (const image of field.images) {
                  const imageField = this.buildImageXml(image);
                  fieldArr.push(imageField);
                }
              }
            } else if (key === 'videos') {
              if (field.videos) {
                for (const video of field.videos) {
                  const videoField = this.buildVideoXml(video);
                  fieldArr.push(videoField);
                }
              }
            } else {
              fieldArr.push(`<${key}>${field[key]}</${key}>`);
            }
          }
        }

        // Append previous value and return
        return `<url>${fieldArr.join('')}</url>\n`;
      })
      .join('');

    return this.withXMLTemplate(content);
  }

  /**
   * Generate Video sitemap entry
   * @param video
   * @returns string
   */
  buildVideoXml(video: VideoEntry): string {
    // using array just because it looks more structured
    return [
      `<video:video>`,
      ...[
        `<video:title>${this.escapeHtml(video.title)}</video:title>`,
        `<video:thumbnail_loc>${entityEscapedUrl(
          video.thumbnailLoc.href,
        )}</video:thumbnail_loc>`,
        `<video:description>${this.escapeHtml(
          video.description,
        )}</video:description>`,
        video.contentLoc &&
          `<video:content_loc>${entityEscapedUrl(
            video.contentLoc.href,
          )}</video:content_loc>`,
        video.playerLoc &&
          `<video:player_loc>${entityEscapedUrl(
            video.playerLoc.href,
          )}</video:player_loc>`,
        video.duration && `<video:duration>${video.duration}</video:duration>`,
        video.viewCount &&
          `<video:view_count>${video.viewCount}</video:view_count>`,
        video.tag && `<video:tag>${this.escapeHtml(video.tag)}</video:tag>`,
        video.rating &&
          `<video:rating>${video.rating
            .toFixed(1)
            .replace(',', '.')}</video:rating>`,
        video.expirationDate &&
          `<video:expiration_date>${this.formatDate(
            video.expirationDate,
          )}</video:expiration_date>`,
        video.publicationDate &&
          `<video:publication_date>${this.formatDate(
            video.publicationDate,
          )}</video:publication_date>`,
        typeof video.familyFriendly !== 'undefined' &&
          `<video:family_friendly>${this.formatBoolean(
            video.familyFriendly,
          )}</video:family_friendly>`,
        typeof video.requiresSubscription !== 'undefined' &&
          `<video:requires_subscription>${this.formatBoolean(
            video.requiresSubscription,
          )}</video:requires_subscription>`,
        typeof video.live !== 'undefined' &&
          `<video:live>${this.formatBoolean(video.live)}</video:live>`,
        video.restriction &&
          `<video:restriction relationship="${video.restriction.relationship}">${video.restriction.content}</video:restriction>`,
        video.platform &&
          `<video:platform relationship="${video.platform.relationship}">${video.platform.content}</video:platform>`,
        video.uploader &&
          `<video:uploader${
            video.uploader.info && ` info="${video.uploader.info}"`
          }>${this.escapeHtml(video.uploader.name)}</video:uploader>`,
      ],
      `</video:video>`,
    ]
      .filter(Boolean)
      .join('');
  }

  /**
   * Normalize sitemap field keys to stay consistent with <xsd:sequence> order
   * @link https://www.w3schools.com/xml/el_sequence.asp
   * @link https://github.com/iamvishnusankar/next-sitemap/issues/345
   * @param x
   * @returns
   */
  normalizeSitemapField(x: SitemapField) {
    const {changefreq, lastmod, loc, priority, ...restProps} = x;

    // Return keys in following order
    return {
      changefreq,
      lastmod,
      loc,
      priority,
      ...restProps,
    };
  }

  /**
   * Create XML Template
   * @param content
   * @returns
   */
  withXMLTemplate(content: string): string {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${content}</urlset>`;
  }

  private escapeHtml(s: string) {
    return s.replace(/[^\dA-Za-z ]/g, (c) => '&#' + c.charCodeAt(0) + ';');
  }

  private formatBoolean(value: boolean): string {
    return value ? 'yes' : 'no';
  }

  /**
   * Composes YYYY-MM-DDThh:mm:ssTZD date format (with TZ offset)
   * (ref: https://stackoverflow.com/a/49332027)
   * @param date
   * @private
   */
  private formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const z = (n: any) => ('0' + n).slice(-2);
    const zz = (n: any) => ('00' + n).slice(-3);
    let off = d.getTimezoneOffset();
    const sign = off > 0 ? '-' : '+';
    off = Math.abs(off);

    return (
      d.getFullYear() +
      '-' +
      z(d.getMonth() + 1) +
      '-' +
      z(d.getDate()) +
      'T' +
      z(d.getHours()) +
      ':' +
      z(d.getMinutes()) +
      ':' +
      z(d.getSeconds()) +
      '.' +
      zz(d.getMilliseconds()) +
      sign +
      z((off / 60) | 0) +
      ':' +
      z(off % 60)
    );
  }
}

/**
 * Return UTF-8 encoded urls
 * @param path
 * @returns
 * @link https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#general-guidelines
 */
export const entityEscapedUrl = (path: string): string => {
  return path
    .replace(/&amp;/g, '&') // decode &amp; to & first, so that we don't replace &amp; again to &amp;amp;
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;');
};
