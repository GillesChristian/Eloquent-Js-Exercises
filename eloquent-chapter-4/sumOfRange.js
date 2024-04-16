const range = function () {
    let values = [];
    if (arguments[2] < 0) {
        for (let i = arguments[0]; i >= arguments[1]; i += arguments[2])
            values.push(i);
        return values;
    }
    else if (arguments[2]) {
        for (let i = arguments[0]; i <= arguments[1]; i += arguments[2])
            values.push(i);
        return values;
    }
    else {
        for (let i = arguments[0]; i <= arguments[1]; i++)
            values.push(i);
        return values;
    }
}

const sum = function (ts) {
    let total = 0;
    for (let i = 0; i < ts.length; i++)
        total += ts[i];
    return total;
}

//  Decrementing range(5, 2, -1)
//  Incrementing range(1, 10);
//  Incrementing with in define intervals range(1, 10, 2);

console.log(range(5, 2, -1));
console.log(sum(range(5, 2, -1))); 