import {Link} from '~/components/ui/link';
import {createCollectionUrl, createProductUrl} from '~/utils/shopify';

import {Minicart} from '../minicart';
import {Logo} from './logo';

export const Header = () => {
  return (
    <header className="w-full border-b">
      <section className="container flex items-center gap-4 py-2">
        <Logo />

        <div className="ml-8 flex gap-4">
          <Link
            ariaLabel=""
            prefetch="intent"
            to={createCollectionUrl('lancamentos')}
          >
            Collection
          </Link>
          <Link
            ariaLabel=""
            prefetch="intent"
            to={createProductUrl('saia-curta-feminina-em-malha-matelasse-rosa')}
          >
            Product
          </Link>
        </div>

        <nav className="ml-auto flex items-center gap-2">
          <Minicart />
        </nav>
      </section>
    </header>
  );
};
