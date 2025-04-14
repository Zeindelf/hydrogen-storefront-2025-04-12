export const createCspHeaders = (request: Request) => {
  const url = new URL(request.url);

  const isDev = process.env.NODE_ENV === 'development';
  const localDirectives = isDev ? ['localhost:*'] : [];
  const devDirectives = isDev ? ['*.tryhydrogen.dev', '*.ngrok-free.app'] : [];

  const weaverseHost = url.searchParams.get('weaverseHost');
  const isDesignMode = url.searchParams.get('weaverseHost');
  const weaverseHosts = ['*.weaverse.io'];

  if (weaverseHost) {
    weaverseHosts.push(weaverseHost);
  }

  /**
   * Default CSP headers, will be used as a base for all environments
   * @refer: https://developers.google.com/tag-platform/security/guides/csp
   */
  const defaultsCSPHeaders = {
    connectSrc: [
      "'self'",
      'cdn.shopify.com',
      'shopify.com',
      'https://*.google-analytics.com',
      'https://*.analytics.google.com',
      'https://*.googletagmanager.com',
      ...weaverseHosts,
    ],
    defaultSrc: [
      "'self'",
      'cdn.shopify.com',
      'shopify.com',
      '*.youtube.com',
      '*.youtu.be',
      '*.vimeo.com',
      '*.google.com',
      '*.google-analytics.com',
      '*.googletagmanager.com',
      ...devDirectives,
      ...localDirectives,
      ...weaverseHosts,
    ],
    fontSrc: [
      "'self'",
      'data:',
      'cdn.shopify.com',
      'use.typekit.net',
      ...devDirectives,
      ...localDirectives,
    ],
    frameAncestors: [...localDirectives, ...devDirectives],
    frameSrc: ["'self'"],
    imgSrc: [
      "'self'",
      'data:',
      'cdn.shopify.com',
      'https://*.googletagmanager.com',
      'https://*.googletagmanager.com',
      ...devDirectives,
      ...localDirectives,
      ...weaverseHosts,
    ],
    scriptSrc: [
      "'unsafe-inline'",
      "'strict-dynamic'",
      'cdn.shopify.com',
      'shopify.com',
      'https://*.googletagmanager.com',
      ...devDirectives,
      ...localDirectives,
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'cdn.shopify.com',
      'shopify.com',
      ...devDirectives,
      ...localDirectives,
      ...weaverseHosts,
    ],
  };

  if (isDesignMode) {
    defaultsCSPHeaders.frameAncestors = ['*'];
  }

  return defaultsCSPHeaders;
};
