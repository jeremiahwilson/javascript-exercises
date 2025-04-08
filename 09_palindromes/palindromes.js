const palindromes = function (str) {
  // Clean the string: lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Convert to array, reverse it, and join back to string
  const reversed = cleanStr.split('').reverse().join('');
  
  // Compare
  return cleanStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
