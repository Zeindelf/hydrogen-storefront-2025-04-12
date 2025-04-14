import {buttonVariants} from '~/components/ui/button';
import {Link} from '~/components/ui/link';
import {cn} from '~/utils/helpers';

export type NotFoundProps = {
  description?: string;
  status?: number;
  title?: string;
};

export const NotFound = ({
  description = 'Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.',
  status = 404,
  title = 'Desculpe, não conseguimos encontrar esta página.',
}: NotFoundProps) => {
  return (
    <section className="container my-6 flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-7xl font-extrabold leading-9 tracking-tight text-primary md:border-r md:px-6 md:text-8xl md:leading-10">
          {status}
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          {title}
        </p>
        <p className="mb-8">{description}</p>
        <Link
          ariaLabel="Voltar para página principal"
          className={cn(buttonVariants())}
          to="/"
        >
          Voltar para página principal
        </Link>
      </div>
    </section>
  );
};
