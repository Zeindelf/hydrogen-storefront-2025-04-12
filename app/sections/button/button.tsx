import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
  InspectorGroup,
} from '@weaverse/hydrogen';

import {useThemeSettings} from '@weaverse/hydrogen';
import * as React from 'react';

import type {ButtonVariantsProps} from '~/components/ui/button';
import type {LinkProps as UILinkProps} from '~/components/ui/link';

import {buttonVariants} from '~/components/ui/button';
import {Link as UILink} from '~/components/ui/link';
import {button} from '~/layout/theme/button';
import {cn} from '~/utils/helpers';

export interface LinkStyleProps {
  backgroundColor: string;
  backgroundColorHover: string;
  borderColor: string;
  borderColorHover: string;
  textColor: string;
  textColorHover: string;
}

export interface LinkProps
  extends ButtonVariantsProps,
    Omit<UILinkProps, 'children' | 'className'>,
    Partial<Omit<HydrogenComponentProps, 'children'>>,
    Partial<LinkStyleProps> {
  openInNewTab?: boolean;
  text?: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      backgroundColor,
      backgroundColorHover,
      borderColor,
      borderColorHover,
      className,
      openInNewTab,
      size,
      style,
      text,
      textColor,
      textColorHover,
      to,
      variant,
      ...props
    },
    ref,
  ) => {
    const {enableViewTransition} = useThemeSettings();

    if (variant === 'custom') {
      style = {
        ...style,
        '--btn-bg': backgroundColor,
        '--btn-bg-hover': backgroundColorHover,
        '--btn-border': borderColor,
        '--btn-border-hover': borderColorHover,
        '--btn-text': textColor,
        '--btn-text-hover': textColorHover,
      } as React.CSSProperties;
    }

    if (!text) return null;

    return (
      <UILink
        className={cn('button', buttonVariants({className, size, variant}))}
        isExternal={openInNewTab}
        ref={ref}
        style={style}
        to={to}
        viewTransition={enableViewTransition}
        {...props}
      >
        {text}
      </UILink>
    );
  },
);

export default Link;

export const linkContentInputs: InspectorGroup['inputs'] = [
  {
    defaultValue: 'Shop now',
    label: 'Text content',
    name: 'text',
    placeholder: 'Shop now',
    type: 'text',
  },
  {
    defaultValue: '/products',
    label: 'Link to',
    name: 'to',
    placeholder: '/products',
    type: 'url',
  },
  {
    condition: 'to.ne.nil',
    defaultValue: false,
    label: 'Open in new tab',
    name: 'openInNewTab',
    type: 'switch',
  },
  {...button.variant.schema},
  {...button.size.schema},
];

export const linkStylesInputs: InspectorGroup['inputs'] = [
  {
    condition: 'variant.eq.custom',
    defaultValue: '#000',
    label: 'Background color',
    name: 'backgroundColor',
    type: 'color',
  },
  {
    condition: 'variant.eq.custom',
    defaultValue: '#fff',
    label: 'Text color',
    name: 'textColor',
    type: 'color',
  },
  {
    condition: 'variant.eq.custom',
    defaultValue: '#00000000',
    label: 'Border color',
    name: 'borderColor',
    type: 'color',
  },
  {
    condition: 'variant.eq.custom',
    defaultValue: '#00000000',
    label: 'Background color (hover)',
    name: 'backgroundColorHover',
    type: 'color',
  },
  {
    condition: 'variant.eq.custom',
    defaultValue: '#000',
    label: 'Text color (hover)',
    name: 'textColorHover',
    type: 'color',
  },
  {
    condition: 'variant.eq.custom',
    defaultValue: '#000',
    label: 'Border color (hover)',
    name: 'borderColorHover',
    type: 'color',
  },
];

export const linkInputs: InspectorGroup['inputs'] = [
  ...linkContentInputs,
  {
    label: 'Button custom styles',
    type: 'heading',
  },
  ...linkStylesInputs,
];

export const schema: HydrogenComponentSchema = {
  inspector: [
    {
      group: 'Button',
      inputs: linkInputs,
    },
  ],
  title: 'Button',
  type: 'button',
};
