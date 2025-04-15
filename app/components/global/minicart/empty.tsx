import {ArrowRight} from 'lucide-react';

import {buttonVariants} from '~/components/ui/button';
import {Link} from '~/components/ui/link';
import {useUI} from '~/hooks/use-ui';
import {normalizeSlashes} from '~/utils/helpers';
import {createCollectionUrl} from '~/utils/shopify';

export const MinicartEmpty = ({
  collectionUrl = createCollectionUrl('/lancamentos'),
}: {
  collectionUrl?: string;
}) => {
  const {closeCart} = useUI();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-4 overflow-hidden">
      <h2>Seu carrinho está vazio</h2>

      <p className="px-4 text-center">
        Para inserir produtos em seu carrinho, basta navegar pela loja ou
        utilizar a busca, e ao encontrar os produtos desejados, clique no botão{' '}
        <strong>Adicionar ao carrinho</strong>.
      </p>

      <Link
        ariaLabel="Continuar comprando"
        className={buttonVariants({variant: 'outline'})}
        onClick={closeCart}
        prefetch="viewport"
        to={normalizeSlashes(collectionUrl)}
      >
        Continuar comprando <ArrowRight size={16} />
      </Link>
    </div>
  );
};
