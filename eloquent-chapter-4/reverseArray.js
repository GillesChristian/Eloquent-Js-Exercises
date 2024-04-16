const reverseArray = function (items) {
    let reverseItems = [];
    for (let i = items.length - 1; i > -1; i--)
        reverseItems.push(items[i]);
    return reverseItems;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));