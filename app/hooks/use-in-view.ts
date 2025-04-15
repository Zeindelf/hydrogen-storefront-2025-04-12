import {useInView as useInViewHook} from 'react-intersection-observer';

export const useInView = () => {
  const {inView: inViewOnce, ref: viewOnceRef} = useInViewHook({
    rootMargin: '100px 0px',
    triggerOnce: true,
  });

  return {inViewOnce, viewOnceRef};
};
