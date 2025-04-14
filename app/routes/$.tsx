import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {isRouteErrorResponse, useRouteError} from '@remix-run/react';

import {Errors} from '~/pages/errors';
import {logger, notFound} from '~/utils/helpers';

export async function loader({request}: LoaderFunctionArgs) {
  const {pathname} = new URL(request.url);

  throw notFound(`${pathname} not found`);
}

export default function CatchAllPageRoute() {
  return null;
}

export function ErrorBoundary() {
  const error = useRouteError();

  logger.info('Error from CatchAllPage');

  // Throw Route errors (400, 401, 403, 404, ...)
  if (isRouteErrorResponse(error)) {
    return <Errors.NotFound status={error.status} />;
  }

  return null;
}
