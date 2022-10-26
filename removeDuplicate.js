const removeDuplicate = (array) => {
  let result = [];
  let i = 0;
  while (i < array.length) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
    i++;
  }
  return { length: result.length, result: result };
};

const array = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
console.log(
  removeDuplicate(array).length,
  "num is: ",
  removeDuplicate(array).result
);
