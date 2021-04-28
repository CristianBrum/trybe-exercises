const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} 'ótimo, fui utilizada no escopo !'`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
    testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2,17,15,35,18,14,20,58,98,711,258,456,74,1];

const sortOddsAndEvens = () => {

  oddsAndEvens.sort((a, b) => a - b);

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i +=1) {
    result *= i;
  }
  return result;
}
console.log(factorial(888888888888888888));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1
// console.log(factorial(5))
