import type {LucideProps} from 'lucide-react';

import {LoaderCircle} from 'lucide-react';

import {cn} from '~/utils/helpers';

export const Loaders = {
  Ellipsis: (props: LucideProps) => (
    <svg
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4" cy="12" opacity="1" r="3">
        <animate
          attributeName="opacity"
          begin="0;spinner_t4KZ.end-0.25s"
          dur="0.75s"
          fill="freeze"
          id="spinner_qYjJ"
          values="1;.2"
        />
      </circle>
      <circle cx="12" cy="12" opacity=".4" r="3">
        <animate
          attributeName="opacity"
          begin="spinner_qYjJ.begin+0.15s"
          dur="0.75s"
          fill="freeze"
          values="1;.2"
        />
      </circle>
      <circle cx="20" cy="12" opacity=".3" r="3">
        <animate
          attributeName="opacity"
          begin="spinner_qYjJ.begin+0.3s"
          dur="0.75s"
          fill="freeze"
          id="spinner_t4KZ"
          values="1;.2"
        />
      </circle>
    </svg>
  ),
  LoaderCircle: ({className, ...props}: LucideProps) => (
    <LoaderCircle className={cn('animate-spin', className)} {...props} />
  ),
};
