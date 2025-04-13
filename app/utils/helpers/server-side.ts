import {canUseDOM} from './dom';

export const ADMIN_CLIENT = 'Admin API Client';

export const validateServerSideUsage = (isTesting = false) => {
  if (canUseDOM && !isTesting) {
    throw new Error(
      `${ADMIN_CLIENT}: Private access tokens and headers should only be used in a server-to-server implementation. Use the public API access token in nonserver environments.`,
    );
  }
};
