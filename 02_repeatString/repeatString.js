const repeatString = function(repeat, count) {
  if (count < 0) { return "ERROR"; }
  let repeated = "";

  for (i = 0; i < count; i++) {
    repeated += repeat;
  }

  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
