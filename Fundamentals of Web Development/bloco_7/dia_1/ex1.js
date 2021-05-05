const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5));

const factor = (number) => {
  let result = 1

  for (let i = 1; i <= number; i += 1) {
      result *= i;
  }

  return result;
};

console.log(factor(5));