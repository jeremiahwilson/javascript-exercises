function removeFromArray(arr, ...args) {
  let ret = [];
  for (i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) { ret.push(arr[i]); }
  }
  return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
