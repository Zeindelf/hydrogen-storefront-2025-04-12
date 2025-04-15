import {useMatches} from '@remix-run/react';
import {Chrome} from 'lucide-react';

import {Link} from '~/components/ui/link';
import {useRootLoaderData} from '~/root';

const LogoLink = ({name}: {name: string}) => (
  <Link
    ariaLabel="Comfortic"
    className="flex items-center space-x-2 text-xl text-primary"
    prefetch="intent"
    to="/"
  >
    <Chrome size={42} />
    <span className="sr-only">{name}</span>
  </Link>
);

export const Logo = () => {
  const {shopify} = useRootLoaderData();
  const matches = useMatches();
  const isIndexRoute = Boolean(
    matches.find((match) => match.id.includes('index')),
  );

  return isIndexRoute ? (
    <h1>
      <LogoLink name={shopify.name} />
    </h1>
  ) : (
    <LogoLink name={shopify.name} />
  );
};
