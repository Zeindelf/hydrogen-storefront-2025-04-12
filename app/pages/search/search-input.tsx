import {Form, useNavigate} from '@remix-run/react';

import {Button} from '~/components/ui/button';
import {Icons} from '~/components/ui/icons';
import {createSearchUrl} from '~/utils/shopify';

export const SearchInput = ({searchTerm}: {searchTerm: string}) => {
  const _navigate = useNavigate();

  return (
    <Form
      action={createSearchUrl(searchTerm)}
      className="relative flex w-full items-center justify-center my-4"
      role="search"
    >
      <label className="sr-only" htmlFor="searchInput">
        Pesquisar
      </label>
      <input
        className="md:w-96 lg:w-[400px] h-9 rounded-r-none"
        defaultValue={searchTerm}
        id="searchInput"
        name="q"
        placeholder="O que você está procurando?"
        type="search"
      />

      <Button
        ariaLabel={`Buscar por ${searchTerm}`}
        className="cursor-pointer rounded-l-none"
        type="submit"
      >
        <Icons.Lucide.Search size={20} />
      </Button>
    </Form>
  );
};
