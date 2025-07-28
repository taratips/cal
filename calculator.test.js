const { add, subtract, multiply, divide } = require('/Users/taratipsuwannasart/Documents/my-calculator-project/calculator');

test('add 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add negative numbers', () => {
  expect(add(-2, -3)).toBe(-5);
});

test('subtract 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('subtract negative numbers', () => {
  expect(subtract(-5, -2)).toBe(-3);
});

test('multiply 3 * 4 = 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('multiply by zero', () => {
  expect(multiply(5, 0)).toBe(0);
});

test('multiply negative numbers', () => {
  expect(multiply(-3, 4)).toBe(-12);
});

test('divide 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide negative numbers', () => {
  expect(divide(-10, 2)).toBe(-5);
});

test('divide by zero should throw error', () => {
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});