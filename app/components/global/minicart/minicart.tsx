import {Await} from '@remix-run/react';
import * as React from 'react';

import {useRootLoaderData} from '~/root';

import {MinicartBadge} from './badge';
import {MinicartDrawer} from './drawer';

export const Minicart = () => {
  const {cartPromise} = useRootLoaderData();

  return (
    <React.Suspense fallback={<MinicartBadge count={0} />}>
      <Await resolve={cartPromise}>
        <MinicartDrawer />
      </Await>
    </React.Suspense>
  );
};
