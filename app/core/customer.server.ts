import type {CustomerAccount, HydrogenSession} from '@shopify/hydrogen';

import {
  BUYER_SESSION_KEY,
  CUSTOMER_ACCOUNT_SESSION_KEY,
} from '~/config/constants';
import {CUSTOMER_DETAILS_QUERY} from '~/graphql/customer/details-query';

export const createCustomerData = async (
  customerAccount: CustomerAccount,
  session?: HydrogenSession,
) => {
  const isLoggedIn = await customerAccount.isLoggedIn();

  if (!isLoggedIn) {
    return {customer: null, errors: undefined, isLoggedIn};
  }

  const [{data, errors}, accessToken] = await Promise.all([
    customerAccount.query(CUSTOMER_DETAILS_QUERY),
    customerAccount.getAccessToken(),
  ]);

  /** For tests purpose */
  const getCustomerInfo = () => {
    const customer = session?.get(CUSTOMER_ACCOUNT_SESSION_KEY);
    const buyerIp = session?.get(BUYER_SESSION_KEY);
    const accessToken = customer?.accessToken;
    const expiresAt = customer?.expiresAt;
    const sessionNonce = session?.get(CUSTOMER_ACCOUNT_SESSION_KEY)?.nonce;

    return {accessToken, buyerIp, customer, expiresAt, sessionNonce};
  };

  return {
    accessToken,
    customer: data.customer,
    errors,
    getCustomerInfo,
    isLoggedIn,
  };
};
