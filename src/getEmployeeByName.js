const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const employeeFound = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeFound;
};

module.exports = getEmployeeByName;
