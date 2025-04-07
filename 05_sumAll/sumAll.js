const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) { return "ERROR"; }

  let larger = a > b ? a : b;
  let smaller = a < b ? a : b;

  let sum = 0;
  
  for (i = smaller; i <= larger; i++) { sum += i; }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
