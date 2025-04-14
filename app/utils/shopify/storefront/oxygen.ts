/**
 * Getting country from Geolocation IP
 * https://github.com/Shopify/hydrogen/discussions/1323
 */
export type OxygenEnv = {
  buyer: {
    readonly city: string | undefined;
    readonly continent: string | undefined;
    readonly country: string | undefined;
    readonly ip: string | undefined;
    readonly isEuCountry: boolean;
    readonly latitude: string | undefined;
    readonly longitude: string | undefined;
    readonly region: string | undefined;
    readonly regionCode: string | undefined;
    readonly timezone: string | undefined;
  };
};

export function getOxygenEnv(request: Request): OxygenEnv {
  return Object.freeze({
    buyer: {
      city: request.headers.get('oxygen-buyer-city') ?? undefined,
      continent: request.headers.get('oxygen-buyer-continent') ?? undefined,
      country: request.headers.get('oxygen-buyer-country') ?? undefined,
      ip: request.headers.get('oxygen-buyer-ip') ?? undefined,
      isEuCountry: Boolean(request.headers.get('oxygen-buyer-is-eu-country')),
      latitude: request.headers.get('oxygen-buyer-latitude') ?? undefined,
      longitude: request.headers.get('oxygen-buyer-longitude') ?? undefined,
      region: request.headers.get('oxygen-buyer-region') ?? undefined,
      regionCode: request.headers.get('oxygen-buyer-region-code') ?? undefined,
      timezone: request.headers.get('oxygen-buyer-timezone') ?? undefined,
    },
  });
}
