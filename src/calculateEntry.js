const { prices } = require('../data/zoo_data');

const ageCounter = { child: 0, adult: 0, senior: 0 };

const countEntrants = (entrants) =>
  entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      ageCounter.child += 1;
    } if (curr.age >= 18 && curr.age < 50) {
      ageCounter.adult += 1;
    } if (curr.age >= 50) {
      ageCounter.senior += 1;
    }
    return { ...acc, ...ageCounter };
  }, ageCounter);

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
