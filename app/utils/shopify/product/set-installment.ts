import type {PartialPrice} from 'types/shopify';

/**
 * @description
 * Take the value of the installment with min price and max installments given
 *
 * @param {number} price Price to get installments
 * @param {number} [maxInstallments=10] Max installments
 * @param {number} [minPrice=1] Min price for each installment
 * @param {number} [interest=0] Interest rate
 *
 * @returns {object}
 * @example
 *  setInstallment(349900, 43000, 10)
 *  /=> {installments: 8, installmentValue: 43737, interest: 0}
 */
export const setInstallment = (
  price?: PartialPrice,
  maxInstallments = 10,
  minPrice = 1,
  interest = 0,
) => {
  const currentPrice = parseFloat(price?.amount || '');
  let installments = Math.floor(currentPrice / minPrice) || 1;

  if (installments > maxInstallments) {
    installments = maxInstallments;
  }

  let installmentValue = currentPrice / installments;

  if (interest > 0) {
    installmentValue =
      (currentPrice * Math.pow(1 + interest / 100, installments)) /
      installments;
  }

  return {
    installments,
    installmentValue: parseFloat(installmentValue + '').toFixed(2),
  };
};
