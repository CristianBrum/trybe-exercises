const longestWord = text => {
  let wordArray = text.split(' ');
  let max = 0;
  let result = '';

  for (const i of wordArray) {
    if (i.length > max) {
      max = i.length;
      result = i;
    }
  }
return result;
};
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceuuuuuu"))