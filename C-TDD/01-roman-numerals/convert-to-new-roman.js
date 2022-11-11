function convertToNewRoman(n) {
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    60: "LX",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let romanized = "";
  const keys = Object.keys(numerals).reverse();
  keys.forEach((key) => {
    while (key <= n) {
      romanized += numerals[key];
      n -= key;
    }
  });
  return romanized;
}

module.exports = convertToNewRoman;