const result = document.getElementById('result');

const names = ['piPPo', 'plUto', 'paperiNO'];
const newNames = [];

names.forEach((name) => {
  newNames.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
});

result.innerHTML = newNames.join(', ');
