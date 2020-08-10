const calculator  = require('../src/calculator');

test('adds positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

test('adds positive numbers correctly', () => {
    expect(calculator.add(1, 2)).not.toBe(4);
});

test('adds negative numbers', () => {
    expect(calculator.add(-2, -2)).toBe(-4);
  });

test('adds no numbers', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

test('subtract numbers', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

test('subtract numbers correctly', () => {
    expect(calculator.subtract(4, 2)).not.toBe(1);
  });

test('subtract from positive numbers', () => {
    expect(calculator.subtract(-2, 5)).toBe(3);
  });

test('subtract two negative numbers', () => {
    expect(calculator.subtract(-4, -4)).toBe(-8);
  });

  test('multiply two numbers numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test('multiply two numbers numbers correctly', () => {
    expect(calculator.multiply(1, 2)).not.toBe(3);
  });

test('multiply two negative numbers', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

test('multiply negative and positive numbers', () => {
    expect(calculator.multiply(-1, 4)).toBe(-4);
  });

  test('divide two positive numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

test('divide two positive numbers correctly', () => {
    expect(calculator.divide(10, 2)).not.toBe(4);
});

test('divides two negative numbers', () => {
    expect(calculator.divide(-200, -20)).toBe(10);
  });

test('divide by zero', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });