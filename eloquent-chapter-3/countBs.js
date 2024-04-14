const countBs = function (string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B')
            count++;
    }

    return count;
}

let word = "Babel";
console.log(`The letter "B" occurs : ${countBs(word)} times.`);