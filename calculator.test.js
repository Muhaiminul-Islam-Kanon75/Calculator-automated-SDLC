const { add, subtract, multiply, divide } = require('./src/calculator');

describe('Calculator', () => {
  test('add: 2 + 3 should equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract: 5 - 2 should equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });
  
  test('multiply: 4 * 5 should equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });
  
  test('divide: 10 / 2 should equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

});

describe('Calculator-non-number', () => {

  test('add: should throw error on non-number input', () => {
    expect(() => add('a', 5)).toThrow('Both arguments must be numbers');
  });

  test('divide: should throw error on divide by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

});
