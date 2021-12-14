module.exports = function reverse (n) {
  n = Math.abs(n);
  let result = '';
  while (n !== 0){
    result = `${result}` + Math.trunc(n % 10);
    n = Math.trunc(n / 10);
  }
  return Number(result);
}
