const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeFound = employees.find((employee) => employee.id === id);
  const firstSpecieCared = employeeFound.responsibleFor[0];
  const residentAnimals = species.find((specie) => specie.id === firstSpecieCared).residents;
  return Object.values(residentAnimals.sort((a, b) => b.age - a.age)[0]);
};

module.exports = getOldestFromFirstSpecies;
