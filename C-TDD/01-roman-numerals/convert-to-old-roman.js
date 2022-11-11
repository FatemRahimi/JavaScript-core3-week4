function convertToOldRoman(n) {
  let result = "";
  let roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let letter in roman) {
    const integer = Math.floor(n / roman[letter]);
    result += letter.repeat(integer);
    n -= integer * roman[letter];

    // console.log(roman[letter]);
  }
  return result;
}

module.exports = convertToOldRoman;
//npm test convert-to-old-roman