const getValue = (roman) => {
  if (roman === "i") return 1;
  if (roman === "v") return 5;
  if (roman === "x") return 10;
  if (roman === "l") return 50;
  if (roman === "c") return 100;
  if (roman === "d") return 500;
  if (roman === "m") return 1000;
  return -1;
};
const romanToInterger = (romanNum) => {
  const newNum = romanNum.toLowerCase();
  let i = 0;
  let result = 0;
  while (i < newNum.length) {
    let current = getValue(newNum[i]);
    let next = getValue(newNum[i + 1]);
    if (current >= next) {
      result += current;
      i++;
    } else if (next > current) {
      result += next - current;
      i += 2;
    }
  }
  return result;
};
const ans = romanToInterger("MCMXCIV");
console.log(ans);
