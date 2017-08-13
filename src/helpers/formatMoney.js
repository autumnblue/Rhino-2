import numeral from 'numeral'

export default function formatMoney(n) {
  return numeral(n).format('0,0.00');
}
