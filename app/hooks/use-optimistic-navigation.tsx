import {useNavigation} from '@remix-run/react';

/**
 * Get navigation optimistic data and pending state.
 * It basically looks for optimistic data in the next location state
 * and compares the optimistic id with the provided id.
 * @returns Optimistic data and navigation pending state
 * @example
 * const {optimisticData, pending} = useOptimisticNavigationData<OptimisticData>(id);
 */
export function useOptimisticNavigation<T>(id: string): {
  optimisticData: null | T;
  pending: boolean;
} {
  const {location, state} = useNavigation();
  const optimisticData = location?.state?.optimisticData;
  const optimisticId = location?.state?.optimisticId;
  const pending = state !== 'idle';

  if (id === optimisticId && optimisticData) {
    return {
      optimisticData,
      pending,
    };
  }

  return {
    optimisticData: null,
    pending,
  };
}
