let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const n = 1;
  // Act
  const expected = "I";
  // Assert
  const result = convertToOldRoman(n);
  expect(result).toEqual(expected);
});

test("returns IIII if passed 4 as an argument", function () {
  // Arrange
  const n = 4;
  // Act
  const expected = "IIII";
  // Assert
  const result = convertToOldRoman(n);
  expect(result).toEqual(expected);
});

test("returns MMM if passed 3000 as an argument", function () {
  // Arrange
  const n = 3000;
  // Act
  const expected = "MMM";
  // Assert
  const result = convertToOldRoman(n);
  expect(result).toEqual(expected);
});