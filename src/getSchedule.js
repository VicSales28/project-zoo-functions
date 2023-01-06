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

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return getObjWithAllSchedules();
  }
  const targetSpecie = species.find((specie) => specie.name === scheduleTarget);
  if (!targetSpecie && !days.includes(scheduleTarget)) {
    return getObjWithAllSchedules();
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: getObjWithAllSchedules()[scheduleTarget] };
  }
  return species.find((test) => test.name === scheduleTarget).availability;
};

module.exports = getSchedule;
