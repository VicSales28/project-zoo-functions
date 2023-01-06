const { prices } = require('../data/zoo_data');

const countEntrants = (arr) => {
  const ageCounter = { child: 0, adult: 0, senior: 0 };
  return arr.reduce((acc, curr) => {
    if (curr.age < 18) {
      ageCounter.child += 1;
    } if (curr.age >= 18 && curr.age < 50) {
      ageCounter.adult += 1;
    } if (curr.age >= 50) {
      ageCounter.senior += 1;
    }
    return { ...acc, ...ageCounter };
  }, ageCounter);
};

const calculateEntry = (arr) => {
  if (arr === undefined || arr.length === 0 || Object.keys(arr).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(arr);
  const childPrice = child * prices.child;
  const adultPrice = adult * prices.adult;
  const seniorPrice = senior * prices.senior;

  const result = (childPrice + adultPrice + seniorPrice);

  return result;
};

module.exports = { calculateEntry, countEntrants };
