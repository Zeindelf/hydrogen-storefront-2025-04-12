/**
 * Get the geolocation object of the buyer
 * @returns buyer geolocation object
 * @example
 * ```js
 * const geolocation = useGeoLocation();
 *
 *  buyer object
 *    {
 *      ip: string;
 *      country: string;
 *      continent: string;
 *      city: string;
 *      isEuCountry: boolean;
 *      latitude: string;
 *      longitude: string;
 *      region: string;
 *      regionCode: string;
 *      timezone: string;
 *    }
 * ```
 */

import {useRootLoaderData} from '~/root';

export const useGeoLocation = () => {
  const {oxygen} = useRootLoaderData();

  return oxygen?.buyer;
};
