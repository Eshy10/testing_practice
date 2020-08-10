const reverseString = (string) => {
    let newStr = ''
    for (let i = (string.length - 1); i >= 0; i -= 1) {
        newStr += string[i];
    }
    return newStr
}