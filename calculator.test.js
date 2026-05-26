const { add } = require('./src/calculator');

describe('Calculator', () => {
  test('add: 2 + 3 should equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

});

describe('Calculator-non-number', () => {

  test('add: should throw error on non-number input', () => {
    expect(() => add('a', 5)).toThrow('Both arguments must be numbers');
  });

});
