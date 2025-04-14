import {Script, useNonce} from '@shopify/hydrogen';
import * as React from 'react';

import type {AnalyticsEvent} from '../types';

export type GAParams = {
  dataLayerName?: string;
  debugMode?: boolean;
  gaId: string;
};

let currDataLayerName: string | undefined = undefined;

export function GoogleAnalytics(props: GAParams) {
  const {dataLayerName = 'dataLayer', debugMode, gaId} = props;
  const nonce = useNonce();

  if (currDataLayerName === undefined) {
    currDataLayerName = dataLayerName;
  }

  React.useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora
    performance.mark('mark_feature_usage', {
      detail: {
        feature: 'shopify-third-parties-ga',
      },
    });
  }, []);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          window.gtag = function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${
            debugMode ? ",{ 'debug_mode': true }" : ''
          });`,
        }}
        id="ga-init"
        nonce={nonce}
      />
      <Script
        id="ga"
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}

export function sendGAEvent(event: AnalyticsEvent) {
  if (currDataLayerName === undefined) {
    console.warn(`GA has not been initialized`);
    return;
  }

  if (window[currDataLayerName]) {
    /**
     * Cleans the ecommerce object before pushing a new one
     * This prevents the new data from getting merged with the previous one
     * which could lead do inaccurate and old data being sent with events
     *
     * source: https://developers.google.com/tag-manager/ecommerce-ga4?hl=pt-br#clearing_the_ecommerce_object
     */
    window[currDataLayerName].push({ecommerce: null});
    window[currDataLayerName].push({
      ecommerce: event.params,
      event: event.name,
    });
  } else {
    console.warn(`GA dataLayer ${currDataLayerName} does not exist`);
  }
}
