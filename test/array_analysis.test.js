const arrayAnalyse = require('../src/array_analysis');


test('analyse array of numbers', () => {
  expect(arrayAnalyse([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('analyse array of a single number', () => {
  expect(arrayAnalyse([1])).toEqual({
    average: 1, min: 1, max: 1, length: 1,
  });
});

test('get the length of the array', () => {
  expect(arrayAnalyse([1, 8, 3, 4])).toHaveLength(4);
});

test('analyse array of an empty array', () => {
  expect(arrayAnalyse([])).toEqual({
    average: 0, min: 0, max: 0, length: 0,
  });
});