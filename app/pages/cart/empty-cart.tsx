import {buttonVariants} from '~/components/ui/button';
import {Link} from '~/components/ui/link';

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="w-full  max-w-xl text-center">
        <h1>Seu carrinho está vazio</h1>
        <p>
          Para continuar comprando, navegue pelas categorias do site ou faça uma
          busca pelo seu produto
        </p>
      </div>

      <Link ariaLabel="Escolher produtos" className={buttonVariants()} to="/">
        Escolher produtos
      </Link>
    </div>
  );
};
