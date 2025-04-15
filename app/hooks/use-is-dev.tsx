import {useRootLoaderData} from '~/root';

export function useIsDev() {
  const data = useRootLoaderData();

  const isDev = data.env.NODE_ENV === 'development';

  return {isDev};
}
