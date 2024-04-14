const countChar = function (string, char) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char)
            count++;
    }
    return count;
}

let message = "Christian";
let checkChar = 'i';
console.log(`The letter ${checkChar} occurs ${countChar(message, checkChar)} in ${message}.`);