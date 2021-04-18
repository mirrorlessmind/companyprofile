const Employee = require('../lib/employee');

test('Will instantiate Employee instance', () => {
  const emp = new Employee();
  expect(typeof emp).toBe('object');
});

test('Will set name using constructor', () => {
  const name = 'Melissa';
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test('Will set id using constructor', () => {
  const testValue = 100;
  const emp = new Employee('Bubba', testValue);
  expect(e.id).toBe(testValue);
});

test('Will set email using constructor argument', () => {
  const testValue = 'test@test.com';
  const emp = new Employee('Bubba', 1, testValue);
  expect(emp.email).toBe(testValue);
});

test('Will get name using getName()', () => {
  const testValue = 'Melissa';
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test('Will get id using getId()', () => {
  const testValue = 100;
  const emp = new Employee('Jennifer', testValue);
  expect(emp.getId()).toBe(testValue);
});

test('Can get email using getEmail()', () => {
  const testValue = 'test@test.com';
  const emp = new Employee('Marissa', 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = 'Employee';
  const emp = new Employee('Craig', 1, 'test@test.com');
  expect(emp.getRole()).toBe(testValue);
});
