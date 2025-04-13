function add<T>(arr: Array<T>, item: T) {
  const unique = (arr || []).filter((val) => val !== item);
  return [...unique, item];
}

function remove<T>(arr: Array<T>, item: T) {
  return (arr || []).filter((val) => val !== item);
}

function toggle<T>(arr: Array<T>, val: T) {
  return arr.includes(val) ? arr.filter((el) => el !== val) : [...arr, val];
}

/**
 * Chunk an array into smaller arrays of a specified size.
 *
 * @param arr The array to chunk.
 * @param chunkSize The size of each chunk.
 *
 * @returns An array of chunks.
 *
 * @see https://web.archive.org/web/20150909134228/https://jsperf.com/chunk-mtds
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
function chunk<T>(arr: T[], chunkSize: number): T[][] {
  const R = [];

  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));

  return R;
}

export const array = {
  add,
  chunk,
  remove,
  toggle,
};
