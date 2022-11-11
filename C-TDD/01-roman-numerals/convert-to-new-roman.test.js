let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  // Act
  const expected = "I";
  // Assert
  const result = convertToNewRoman(n);
  expect(result).toEqual(expected);
});

test("returns Iv if passed 4 as an argument", function () {
  // Arrange
  const n = 4;
  // Act
  const expected = "IV";
  // Assert
  const result = convertToNewRoman(n);
  expect(result).toEqual(expected);
});

test("returns IX if passed 9 as an argument", function () {
  // Arrange
  const n = 9;
  // Act
  const expected = "IX";
  // Assert
  const result = convertToNewRoman(n);
  expect(result).toEqual(expected);
});

//npm test convert-to-new-roman