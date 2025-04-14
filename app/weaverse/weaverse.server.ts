import type {WeaverseClientArgs} from '@weaverse/hydrogen';

import {WeaverseClient} from '@weaverse/hydrogen';

import {components} from '~/weaverse/components';
import {themeSchema} from '~/weaverse/schema.server';

export function createWeaverseClient(
  args: Omit<WeaverseClientArgs, 'components' | 'themeSchema'>,
) {
  return new WeaverseClient({
    ...args,
    components,
    themeSchema,
  });
}
