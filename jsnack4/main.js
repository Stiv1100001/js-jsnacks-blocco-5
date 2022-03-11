const result = document.getElementById(`result`);

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

let mammals = animals
  .filter((animal) => {
    return animal.classe === 'mammiferi';
  })
  .map((animal) => {
    return animal.nome + ' - ' + animal.famiglia;
  });

result.innerHTML = mammals.join(', ');
