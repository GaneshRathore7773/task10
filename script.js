const p = 10000,
  t = 4,
  r = 2 / 100,
  n = 2;
const a = p * (1 + r / n) ** (n * t);
const CI = a - p;
console.log("the compound interest after four year is:", CI);
