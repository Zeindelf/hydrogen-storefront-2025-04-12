import * as React from 'react';

const tips = [
  'Verifique se não há <strong>erro de digitação</strong>',
  'Tente utilizar uma <strong>única palavra</strong>',
  'Tente buscar por <strong>termos menos específicos</strong>',
  'Procure utilizar <strong>sinônimos</strong> ao <strong>termo desejado</strong>',
];

export const EmptySearch = ({
  children,
  searchTerm,
}: {
  children?: React.ReactNode;
  searchTerm: string;
}) => {
  return (
    <div className="mx-auto mt-4 flex max-w-full flex-col items-center justify-center py-8">
      <h2 className="mb-2 text-center">
        <span>
          Não encontramos nenhum resultado para{' '}
          <strong className="text-primary underline">{searchTerm}</strong>.
        </span>
      </h2>

      <ul className="text-sm">
        {tips.map((item) => (
          <li
            className="my-1 flex items-center px-1 [&_strong]:text-primary"
            key={item}
          >
            <span className="m-2 size-2 rounded-full bg-primary"></span>
            <p dangerouslySetInnerHTML={{__html: item}} />
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};
