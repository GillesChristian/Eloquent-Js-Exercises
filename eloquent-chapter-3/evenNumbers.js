const isEven = function (value) {
    if (value === 0)
        return true;
    else if (value === 1)
        return false;
    else
        return isEven(value - 2);
}

let result = isEven(75);
console.log(result);