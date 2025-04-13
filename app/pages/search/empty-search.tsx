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
    <div className="py-8 mt-4 max-w-full flex items-center flex-col justify-center mx-auto">
      <h2 className="text-center mb-2">
        <span>
          Não encontramos nenhum resultado para{' '}
          <strong className="text-primary underline">{searchTerm}</strong>.
        </span>
      </h2>

      <ul className="text-sm">
        {tips.map((item) => (
          <li
            className="flex items-center px-1 my-1 [&_strong]:text-primary"
            key={item}
          >
            <span className="bg-primary size-2 m-2 rounded-full"></span>
            <p dangerouslySetInnerHTML={{__html: item}} />
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};
