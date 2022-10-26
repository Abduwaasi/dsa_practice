function longestCommonPrefix(array) {
  array.sort();
  const size = array.length;
  const end = Math.min(array[0].length, array[size - 1].length);
  let i = 0;
  let pre = [];
  while (i < end && array[0][i] === array[size - 1][i]) {
    pre.push(array[0][i]);
    i++;
  }
  return pre.join("");
}
const min = longestCommonPrefix(["mineral", "minute", "mint"]);
console.log(min);
