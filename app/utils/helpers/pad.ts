/**
 * Zero padding number
 *
 * @param  {integer} number   Number to format
 * @param  {integer} [size=2] Digits limit
 *
 * @return {string}           Formatted num with zero padding
 */
export const pad = (number: number, size = 2): string => {
  let strNum = String(number);

  while (strNum.length < size) {
    strNum = `0${strNum}`;
  }

  return strNum;
};
