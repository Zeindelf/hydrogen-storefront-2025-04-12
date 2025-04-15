import type {ShopifyPageViewPayload} from '@shopify/hydrogen';

import {useMatches} from '@remix-run/react';
import {useMemo} from 'react';

import {useRootLoaderData} from '~/root';

import {useLocale} from './use-locale';

export const usePageAnalytics = ({
  hasUserConsent,
}: {
  hasUserConsent: boolean;
}) => {
  const matches = useMatches();
  const {shopify} = useRootLoaderData();
  const locale = useLocale();

  return useMemo(() => {
    const data: Record<string, unknown> = {};

    matches.forEach((event) => {
      const eventData = event?.data as Record<string, unknown>;
      if (eventData) {
        eventData['analytics'] && Object.assign(data, eventData['analytics']);

        const selectedLocale =
          (eventData['selectedLocale'] as typeof locale) || locale;

        Object.assign(data, {
          acceptedLanguage: selectedLocale.language,
          currency: selectedLocale.currency,
        });
      }
    });

    return {
      ...data,
      hasUserConsent,
      shopId: shopify.shopId,
    } as unknown as ShopifyPageViewPayload;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, hasUserConsent]);
};
