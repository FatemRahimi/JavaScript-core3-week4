// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const avg = numbers.filter((e) => typeof e === 'number');
  return avg.reduce((a, cv) => a + cv, 0) / avg.length;
}

module.exports = average;
