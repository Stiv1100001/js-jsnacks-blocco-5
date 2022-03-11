function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCodePlayer() {
  let code = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < 3; i++) {
    code += characters[getRandomInteger(0, characters.length)];
  }

  for (let i = 0; i < 3; i++) {
    code += getRandomInteger(0, 10);
  }

  return code;
}

const basketPlayer = {
  codePlayer: getRandomCodePlayer(),
  name: 'Elvis',
  lastname: 'Presley',
  age: getRandomInteger(20, 30),
  averagePoints: getRandomInteger(0, 51),
  successPoints: getRandomInteger(0, 101),
};

const result = `<h2>${basketPlayer.name} ${basketPlayer.lastname}, ${basketPlayer.age} - code: ${basketPlayer.codePlayer}</h2><br>
<h3>Points</h3>
<h4>Average points: ${basketPlayer.averagePoints}</h4>
<h4>3 points average score: ${basketPlayer.successPoints}</h4>
`;

document.getElementById('result').innerHTML = result;
