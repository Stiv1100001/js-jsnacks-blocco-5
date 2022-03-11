const result = document.getElementById(`result`);

const cars = [
  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Benzina',
  },
  {
    marca: 'Fiat',
    modello: 'Fiesta',
    alimentazione: 'Benzina',
  },
  {
    marca: 'Mercedes',
    modello: 'Fiesta',
    alimentazione: 'Diesel',
  },
  {
    marca: 'Ford',
    modello: 'A1',
    alimentazione: 'Benzina',
  },
  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Diesel',
  },
  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Benzina',
  },
  {
    marca: 'Ford',
    modello: 'Punto',
    alimentazione: 'GPL',
  },
  {
    marca: 'Ford',
    modello: 'Focus',
    alimentazione: 'Metano',
  },
  {
    marca: 'Tesla',
    modello: 'Fiesta',
    alimentazione: 'Elettrico',
  },
  {
    marca: 'Tesla',
    modello: 'Model4',
    alimentazione: 'Benzina',
  },
];

let benzina = cars.filter((car) => {
  return car.alimentazione === 'Benzina';
});

let diesel = cars.filter((car) => {
  return car.alimentazione === 'Diesel';
});

let other = cars.filter((car) => {
  return car.alimentazione !== 'Diesel' && car.alimentazione !== 'Benzina';
});

benzina = benzina.map((car) => {
  return car.marca + ' ' + car.modello;
});

diesel = diesel.map((car) => {
  return car.marca + ' ' + car.modello;
});

other = other.map((car) => {
  return car.marca + ' ' + car.modello;
});

result.innerHTML += `Benzina: ${benzina.join(', ')} <br><br>`;
result.innerHTML += `Diesel: ${diesel.join(', ')} <br><br>`;
result.innerHTML += `Altre: ${other.join(', ')} <br>`;
