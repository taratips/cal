const { add, subtract, multiply, divide } = require('./calculator');

test('subtract 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply 3 * 4 = 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divide 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide by zero should throw error', () => {
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});