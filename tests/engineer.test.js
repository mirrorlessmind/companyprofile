
const Engineer = require('../lib/engineer');

test('Can set GitHub account via constructor', () => {
  const testValue = 'GitHubUser';
  const emp = new Engineer('Bubba', 1, 'test@test.com', testValue);
  expect(emp.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = 'Engineer';
  const emp = new Engineer('Bubba', 1, 'test@test.com', 'GitHubUser');
  expect(emp.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
  const testValue = 'GitHubUser';
  const emp = new Engineer('Bubba', 1, 'test@test.com', testValue);
  expect(emp.getGithub()).toBe(testValue);
});