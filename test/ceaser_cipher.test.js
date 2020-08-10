const ceaser = require('../src/ceaser_cipher');

test('ceaser cipher with single letter', () => {
    expect(ceaser('a', 3)).toMatch('d');
  });


test('ceaser cipher with word in uppercase and lowercase', () => {
    expect(ceaser('Aaa', 3)).toMatch('Ddd');
  });


test('ceaser cipher with words with spaces and punctuation ', () => {
    expect(ceaser('Hello, World!', 5)).toMatch('Mjqqt, Btwqi!');
});


test('works with negative shift', () => {
    expect(ceaser('Mjqqt, Btwqi!', -5)).toMatch('Hello, World!');
});


test('wraps letter z to a', () => {
    expect(ceaser('Z', 1)).toMatch('A');
});
