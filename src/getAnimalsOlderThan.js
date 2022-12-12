const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalFound = data.species.find((specie) => specie.name === animal);
  return animalFound.residents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
