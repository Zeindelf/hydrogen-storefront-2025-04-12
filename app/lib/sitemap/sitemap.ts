import type {SitemapField} from './sitemap-builder';

import {withXMLResponse} from './response';
import {SitemapBuilder} from './sitemap-builder';

/**
 * Generate server side sitemaps
 * @param fields
 * @param headers Custom request headers
 */
export const createSitemap = async (fields: SitemapField[], headers = {}) => {
  const contents = new SitemapBuilder().buildSitemapXml(fields);

  return withXMLResponse(contents, headers);
};
