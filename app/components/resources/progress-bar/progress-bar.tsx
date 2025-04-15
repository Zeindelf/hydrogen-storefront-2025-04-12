import {useNavigation} from '@remix-run/react';
import * as NProgress from 'nprogress';
import * as React from 'react';

type ProgressProps = {
  delay?: number;
  easing?: string;
  showSpinner?: boolean;
  speed?: number;
  startFrom?: number;
  trickle?: boolean;
  trickleSpeed?: number;
};

const defaultConfig: Required<ProgressProps> = {
  delay: 0,
  easing: 'linear',
  showSpinner: false,
  speed: 200,
  startFrom: 20,
  trickle: true,
  trickleSpeed: 200,
};

export const ProgressBar = (props: ProgressProps) => {
  const navigation = useNavigation();
  const config = {
    ...defaultConfig,
    ...props,
  };

  React.useEffect(() => {
    let timeOut: null | ReturnType<typeof setTimeout> = null;

    if (navigation.state !== 'idle') {
      timeOut = setTimeout(() => NProgress.start(), config.delay);
    } else if (navigation.state === 'idle') {
      if (timeOut) clearTimeout(timeOut);
      NProgress.done();
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation.state]);

  React.useEffect(() => {
    NProgress.configure({
      easing: config.easing,
      minimum: config.startFrom / 100,
      showSpinner: config.showSpinner,
      speed: config.speed,
      trickle: config.trickle,
      trickleSpeed: config.trickleSpeed,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
