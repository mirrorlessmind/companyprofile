
const Intern = require('../lib/intern');

test('Can set school via constructor', () => {
  const testValue = 'UAB';
  const emp = new Intern('Lucille', 1, 'test@test.com', testValue);
  expect(emp.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = 'Intern';
  const emp = new Intern('Lucille', 1, 'test@test.com', 'UCLA');
  expect(emp.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = 'UAB';
  const emp = new Intern('Lucille', 1, 'test@test.com', testValue);
  expect(emp.getSchool()).toBe(testValue);
});