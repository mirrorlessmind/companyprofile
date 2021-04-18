const Manager = require('../lib/manager');

test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const emp = new Manager('Bubba', 1, 'test@test.com', testValue);
  expect(emp.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = 'Manager';
  const emp = new Manager('Bubba', 1, 'test@test.com', 100);
  expect(emp.getRole()).toBe(testValue);
});

test('Can get office number via getOffice()', () => {
  const testValue = 100;
  const emp = new Manager('Bubba', 1, 'test@test.com', testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});