const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((visitor) => visitor.age < 18).length;
  const adult = entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length;
  const senior = entrants.filter((visitor) => visitor.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }

  const childPrice = countEntrants(entrants).child * prices.child;
  const adultPrice = countEntrants(entrants).adult * prices.adult;
  const seniorPrice = countEntrants(entrants).senior * prices.senior;

  const result = (childPrice + adultPrice + seniorPrice);

  return result;
};

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
