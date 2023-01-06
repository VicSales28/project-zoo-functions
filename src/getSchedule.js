const { species, hours } = require('../data/zoo_data');

const days = Object.keys(hours);
// console.log(days);

const getInfoAnimalsAvailable = (day) => species
  .filter((animal) => animal.availability.includes(day));
// console.log(getInfoAnimalsAvailable('Tuesday'));

const getNames = (array) => array.map(({ name }) => name);
// console.log(getNames(array));

const closedDay = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};

const getObjWithAllSchedules = () => {
  const objectWithAllSchedules = days.reduce((acc, day) => {
    acc[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getNames((getInfoAnimalsAvailable(day))),
    };
    return acc;
  }, {});
  objectWithAllSchedules.Monday = closedDay;
  return objectWithAllSchedules;
};

console.log(getObjWithAllSchedules());

const getInfosDay = (target) => ({
  [target]: getObjWithAllSchedules()[target],
});
// console.log(getInfosDay('Tuesday'));

const getAvaliableDays = (target) => species
  .find((animal) => animal.name === target).availability;
// console.log(getAvaliableDays('lions'));

const getSchedule = (target) => {
  if (target === undefined) {
    return getObjWithAllSchedules();
  }
  const targetSpecie = species.find((specie) => specie.name === target);
  if (!targetSpecie && !days.includes(target)) {
    return getObjWithAllSchedules();
  }
  if (days.includes(target)) {
    return getInfosDay(target);
  }
  return getAvaliableDays(target);
};

module.exports = getSchedule;
