const result = document.getElementById(`result`);

const people = [
  { nome: 'Marco', cognome: 'Romboli', eta: 20 },
  { nome: 'Piero', cognome: 'Romboli', eta: 20 },
  { nome: 'Giovanni', cognome: 'Romboli', eta: 20 },
  { nome: 'Sandra', cognome: 'Romboli', eta: 20 },
];

const newArray = people.map((person) => {
  if (person.eta >= 18) person.phrase = `${persona.nome} ${persona.cognome} può guidare`;
  else person.phrase = `${persona.nome} ${persona.cognome} non può guidare`;

  return person;
});

console.table(newArray);
