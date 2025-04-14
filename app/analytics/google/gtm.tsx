import {Script, useNonce} from '@shopify/hydrogen';
import * as React from 'react';

type JSONValue =
  | {[key: string]: JSONValue}
  | boolean
  | JSONValue[]
  | number
  | string;

export type GTMParams = {
  auth?: string;
  dataLayer?: {[key: string]: JSONValue};
  dataLayerName?: string;
  gtmId: string;
  gtmScriptUrl?: string;
  preview?: string;
};

let currDataLayerName = 'dataLayer';

export function GoogleTagManager(props: GTMParams) {
  const {
    auth,
    dataLayer,
    dataLayerName = 'dataLayer',
    gtmId,
    gtmScriptUrl = 'https://www.googletagmanager.com/gtm.js',
    preview,
  } = props;
  const nonce = useNonce();

  currDataLayerName = dataLayerName;

  const gtmLayer = dataLayerName !== 'dataLayer' ? `&l=${dataLayerName}` : '';
  const gtmAuth = auth ? `&gtm_auth=${auth}` : '';
  const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : '';

  React.useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora
    performance.mark('mark_feature_usage', {
      detail: {
        feature: 'shopify-third-parties-gtm',
      },
    });
  }, []);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
(function(w,l){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
})(window,'${dataLayerName}');
          `,
        }}
        id="gtm-init"
        nonce={nonce}
      />
      <Script
        data-ntpc="GTM"
        id="gtm"
        src={`${gtmScriptUrl}?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}`}
      />
      <noscript>
        <iframe
          height="0"
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          style={{display: 'none', visibility: 'hidden'}}
          title="Google Tag Manager No-JS Fallback"
          width="0"
        />
      </noscript>
    </>
  );
}

export const sendGTMEvent = (data: Object, dataLayerName?: string) => {
  // special case if we are sending events before GTM init and we have custom dataLayerName
  const dataLayer = dataLayerName || currDataLayerName;
  // define dataLayer so we can still queue up events before GTM init
  window[dataLayer] = window[dataLayer] || [];
  window[dataLayer].push(data);
};
