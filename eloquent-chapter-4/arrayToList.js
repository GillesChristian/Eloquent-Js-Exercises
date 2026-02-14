const arrayToList = function (items) {
  let list = null;

  for (let i = items.length - 1; i >= 0; i--) {
    list = {
      value: items[i],
      rest: list,
    };
  }

  return list;
};

const list = arrayToList([1, 2, 3, 4, 5, 6, 7]);
console.log(list);
