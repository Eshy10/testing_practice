const encryption = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const findLetter = (n) => {
  const ended = true;
  let number = n;
  while (ended) {
    if (number >= encryption.length) {
      number -= encryption.length;
    } else if (number < 0) {
      number += encryption.length;
    } else {
      return encryption[number];
    }
  }
  return true;
};

const changeCase = (newStr, oldStr) => {
  const output = newStr.split('');
  for (let i = 0; i < newStr.length; i += 1) {
    if (oldStr[i] === oldStr[i].toUpperCase()) {
      output[i] = newStr[i].toUpperCase();
    }
  }
  return output.join('');
};

const ceaser = (s, n) => {
  const lowStr = s.toLowerCase();
  let newStr = '';
  for (let i = 0; i < lowStr.length; i += 1) {
    if (encryption.indexOf(lowStr[i]) !== -1) {
      const newLetter = findLetter(encryption.indexOf(lowStr[i]) + n);
      newStr += newLetter;
    } else {
      newStr += lowStr[i];
    }
  }
  newStr = changeCase(newStr, s);
  return newStr;
};

module.exports = ceaser;