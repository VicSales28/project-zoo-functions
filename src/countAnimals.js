const { species } = require('../data/zoo_data');

const numberOfAllResidentAnimals = species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const countResidentsSpecificSpecie = (animal) => {
  const { residents } = species.find(({ name }) => name === Object.values(animal)[0]);
  return residents.length;
};

const countResidentsSpecificSex = (animal) => {
  const { residents } = species.find(({ name }) => name === Object.values(animal)[0]);
  const filter = residents.filter((resident) => resident.sex === Object.values(animal)[1]);
  return filter.length;
};

const countAnimals = (animal) => {
  if (animal === undefined) {
    return numberOfAllResidentAnimals;
  }
  if (Object.values(animal).length === 1) {
    return countResidentsSpecificSpecie(animal);
  }
  return countResidentsSpecificSex(animal);
};

module.exports = countAnimals;
