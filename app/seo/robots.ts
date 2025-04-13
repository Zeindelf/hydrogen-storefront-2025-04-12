import type {SeoConfig} from '@shopify/hydrogen';

export const createRobots = (args?: SeoConfig['robots']) => {
  const robots: SeoConfig['robots'] = {
    noFollow: args?.noFollow ?? false,
    noIndex: args?.noIndex ?? false,
    ...args,
  };

  return {robots};
};
