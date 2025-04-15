import * as React from 'react';

import {ProgressBar} from '~/components/resources/progress-bar';
import {SkipLink} from '~/components/resources/skip-link';
import {TailwindIndicator} from '~/components/resources/tailwind-indicator';
import {Link} from '~/components/ui/link';
import {Toaster} from '~/components/ui/sooner';
import {UIProvider} from '~/hooks/use-ui';

export const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <UIProvider>
      <SkipLink />
      <ProgressBar />

      <header className="flex h-16 items-center justify-center bg-cyan-300 text-3xl font-extrabold">
        <Link ariaLabel="Home" prefetch="intent" to="/">
          HEADER
        </Link>
      </header>

      <main className="grow" id="MainContent" role="main">
        {children}
      </main>

      <footer className="flex h-64 items-center justify-center bg-emerald-300 text-3xl font-extrabold">
        FOOTER
      </footer>

      <Toaster />
      <TailwindIndicator />
    </UIProvider>
  );
};
