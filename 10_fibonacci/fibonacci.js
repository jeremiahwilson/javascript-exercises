const fibonacci = function(n) {
  let x = toNumber(n);
  if (x < 0) { return "ERROR"; }
  let fib = [1, 1];
  let i = 2;

  while(fib.length < x) {
    fib[i] = fib[i-1]+fib[i-2];
    i++;
  }

  return fib[x];
};

// Do not edit below this line
module.exports = fibonacci;
