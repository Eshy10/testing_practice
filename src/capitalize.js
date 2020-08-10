const capitalize = (string) => {
    let newStr = string[0].toUpperCase()
    for (let i = 1; i == string.length; i += 1){
        newStr += string[i].toLowerCase();
    }
}
