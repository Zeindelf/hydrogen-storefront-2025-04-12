import * as React from 'react';

export interface SkipLInkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  text?: string;
  to?: string;
}

export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLInkProps>(
  (
    {text = 'Pular para o conteúdo principal', title, to = '#MainContent'},
    ref,
  ) => {
    return (
      <a
        aria-label={title || text}
        className="m-4 bg-primary text-white rounded-lg p-4 absolute opacity-0 transition-transform duration-150 -z-10 focus:opacity-100 focus:z-20 focus-visible:opacity-100 focus-visible:z-20"
        href={to}
        ref={ref}
        tabIndex={0}
        title={title || text}
      >
        {text}
      </a>
    );
  },
);

SkipLink.displayName = 'SkipLink';
