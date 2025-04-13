import {type LoaderFunctionArgs, redirect} from '@shopify/remix-oxygen';

import {createAccountUrl} from '~/utils/shopify';

// Fallback wild card for all unauthenticated routes in account section
export async function loader({context}: LoaderFunctionArgs) {
  await context.customerAccount.handleAuthStatus();

  return redirect(createAccountUrl(), {
    headers: {
      'Set-Cookie': await context.session.commit(),
    },
  });
}
