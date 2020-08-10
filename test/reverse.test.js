const reverse = require('../src/reverse');

test('reverses single word', () => {
    expect(reverse('hello')).toMatch('olleh');
  });

  test('reverses single letter', () => {
    expect(reverse('h')).toMatch('h')
  })

  test('reverses multiple words', () => {
    expect(reverse('hello there')).toMatch('ereht olleh')
  })

  test('reverse words with numbers and punctuation', () => {
    expect(reverse('123! abc!')).toMatch('!cba !321')
  })