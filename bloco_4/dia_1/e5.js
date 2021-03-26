//exercicio 1
let numberOne = 50;
let numberTwo = 100;

console.log('soma: ' + (numberOne + numberTwo));
console.log('sub: ' + (numberOne - numberTwo));
console.log('mult: ' + (numberOne * numberTwo));
console.log('div: ' + (numberOne / numberTwo));
console.log('mod: ' + (numberOne % numberTwo));



//exercicio 2
if (numberOne > numberTwo){
    console.log('Numero 1 é maior');
}else{
   console.log('O Numero 2 é maior');
};

//exercicio 3
let valorOne = 100;
let valorTwo = 65;
let valorThree = 15;

if(valorOne > valorTwo && valorOne > valorThree){
    console.log('Valor 1 é maior');
} else if (valorTwo > valorThree && valorTwo > valorOne){
    console.log('Valor 2 é maior');
}else {
    console.log('Valor 3 é maior');
}

//exercicio 4
if (valorOne > 0){
    console.log('positive');
}else if (valorOne < 0){
    console.log('negative');
}else {
    console.log('zero');
}

//exercicio 5
valorTriangle = valorOne + valorTwo + valorThree;

sumTriangle = valorOne > 0 && valorTwo > 0 && valorThree > 0;
if (sumTriangle){
if (valorTriangle === 180) {
    console.log(true);
} else {
    console.log(false);
};
} else {
    console.log('error');
}





