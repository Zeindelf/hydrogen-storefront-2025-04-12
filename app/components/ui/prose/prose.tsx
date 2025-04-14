import type {VariantProps} from 'class-variance-authority';

import {cva} from 'class-variance-authority';
import * as React from 'react';

import {cn} from '~/utils/helpers';

export type ProseVariantsProps = VariantProps<typeof proseVariants>;
const proseVariants = cva(
  [
    /** Element modifiers. Refer: https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers */
    'prose',
    // Sizing
    'max-w-none',
    // Spaces
    'prose-p:mb-2 prose-p:mt-0',
    // Texts
    'text-sm text-foreground prose-strong:text-black',
    // Headings
    'prose-headings:mb-4 prose-headings:mt-6 prose-headings:font-bold',
    // Headings levels
    // 'prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg',
    'prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl',
    // Paragraphs
    'prose-span:text-muted prose-span:text-[85%]',
    // Links
    'prose-a:text-primary prose-a:underline hover:prose-a:text-neutral-500 dark:hover:prose-a:text-neutral-200',
    // Lists
    'prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6',
    // Dark mode
    'dark:prose-headings:text-foreground dark:prose-strong:text-foreground',
  ],
  {
    variants: {
      layout: {
        'page-content': 'mx-auto max-w-[75ch] prose-p:my-2',
      },
    },
  },
);

export interface ProseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ProseVariantsProps {
  html?: string;
}

export const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({className, html, layout}, ref) => {
    return (
      <div
        className={cn(proseVariants({className, layout}))}
        dangerouslySetInnerHTML={{__html: html as string}}
        ref={ref}
      />
    );
  },
);

Prose.displayName = 'Prose';
