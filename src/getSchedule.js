const { species, hours } = require('../data/zoo_data');

const day = Object.keys(hours);

const getObjWithAllSchedules = () => {
  const objectWithAllSchedules = day.reduce((acc, day) => {
    acc[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(day)).map(({ name }) => name),
    };
    return acc;
  }, {});
  objectWithAllSchedules.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objectWithAllSchedules;
};

console.log(getObjWithAllSchedules());

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return getObjWithAllSchedules();
  }
};

module.exports = getSchedule;
