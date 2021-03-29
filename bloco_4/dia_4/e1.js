let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let indexinfo in info) {
  if (
    info[indexinfo] === info.recorrente &&
    info[indexinfo] === 'Sim' &&
    info2[indexinfo] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  }else{

  console.log(info[indexinfo], ' e '+ info2[indexinfo]);
  }

}