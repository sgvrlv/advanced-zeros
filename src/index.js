module.exports = function getZerosCount(number, base) {

  let noz = Number.MAX_VALUE;

  let j = base;
  for (let i = 2; i <= base; i++) {
    if (j % i === 0) {
      let p = 0;
      while (j % i === 0) {
         j /= i;     
         p++;
      }
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      noz = Math.min(noz, Math.floor(c / p))
    }
  }
  return noz;
};