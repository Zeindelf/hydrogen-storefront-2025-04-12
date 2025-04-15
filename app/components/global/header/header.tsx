import {Minicart} from '../minicart';
import {Logo} from './logo';

export const Header = () => {
  return (
    <header className="w-full border-b">
      <section className="container flex items-center gap-4 py-2">
        <Logo />

        <nav className="ml-auto flex items-center gap-2">
          <Minicart />
        </nav>
      </section>
    </header>
  );
};
