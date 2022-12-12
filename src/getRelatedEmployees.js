const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const output = isManager(managerId);
  if (output === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees = data.employees.filter(({ managers }) => managers.includes(managerId));
  const names = managedEmployees.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return names;
};

module.exports = { isManager, getRelatedEmployees };
