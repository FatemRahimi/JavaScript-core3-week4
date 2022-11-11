function add(num) {
  const result = num.split(",");
  return result.reduce((acc, number) => {
    const integer = Number(number);
    if (integer > 1000) return acc;
    if (integer < 0)
      throw new Error(`Negative numbers not allowed: ${integer}`);
    return acc + integer;
  }, 0);
}

module.exports = add;
 
