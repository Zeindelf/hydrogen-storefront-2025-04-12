import {
  ATTR_LOADING_EAGER,
  DEFAULT_GRID_IMG_LOAD_EAGER_COUNT,
} from '~/config/constants';

export function getImageLoadingPriority(
  index = 2,
  maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT,
) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : undefined;
}
