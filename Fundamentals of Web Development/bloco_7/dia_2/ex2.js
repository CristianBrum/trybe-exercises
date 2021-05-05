const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

addTurn = (obj, key, value) => {
  obj[key] = value;
}
addTurn(lesson2, 'tunos', 'manhã')

console.log(lesson2);
////////////////////////////////////////////
const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson3));
/////////////////////////////////////////////
objLength = (obj) => Object.keys(obj).length;

console.log(objLength(lesson2));
/////////////////////////////////////////////
objValues = (obj) => Object.values(obj);

console.log(objValues(lesson2));
////////////////////////////////////////////
const allLessons = Object.assign( {}, {lesson1, lesson2, lesson3});

console.log(allLessons);
///////////////////////////////////////////
const totalStudents = () => {
  const total = `${lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes}`;
  console.log(`O total de Alunos é ${total}`);
}
totalStudents();
//////////////////////////////////////////
const getNumberOfStudents = (obj) => {
let total = 0;

const array = Object.keys(obj);
for (index in array) {
  total += obj[array[index]].numeroEstudantes;
}
return total;
};
console.log(getNumberOfStudents(allLessons));
///////////////////////////////////////////
const keyValue = (obj, number) => Object.values(obj)[number];

console.log(keyValue(lesson2, 3));
///////////////////////////////////////////
const verifyPair = (obj, key, values) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === values) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));