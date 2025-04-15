import * as React from 'react';

export function useIsHydrated() {
  const [isHydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  return {isHydrated};
}
