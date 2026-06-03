const suma = require('../src/suma');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma 0 + 0 debe ser 0', () => {
  expect(suma(0, 0)).toBe(0);
});