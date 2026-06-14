const sum = require('../task');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('5 + (-3) = 2', () => {
  expect(sum(5, -3)).toBe(2);
});

test('-4 + (-6) = -10', () => {
  expect(sum(-4, -6)).toBe(-10);
});