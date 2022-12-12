const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  return species.filter((animal) => ids.some((id) => animal.id === id));
};

module.exports = getSpeciesByIds;
