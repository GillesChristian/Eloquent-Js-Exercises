const arrayToList = function (args) {
    args.shift()
    if (args.length === 1) {
        return {
            value: args[0],
            rest: null
        }
    }
    else {
        return {
            value: args[0],
            rest: arrayToList(args)
        }
    }

}
let list = arrayToList([, 1, 2, 3, 4, 5, 6, 7]);
console.log(list);


// let list = {};
//     list.value = arguments[0][0];
//     list.rest = { value: arguments[0][1], rest: { value: arguments[0][2], rest: null } }
//     console.log(list);