const capitalize = require('../src/capitalize');

test('capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toMatch('Hello');
  });

  test('capitalize a single letter', () => {
    expect(capitalize('h')).toMatch('H')
  })

  test('capitalize the first letter of a sentence', () => {
    expect(capitalize('hello there!')).toMatch('Hello there!')
  })
