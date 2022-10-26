let answer = [];

const longestSubstring = (string) => {
  let i = 0;
  let count = 0;
  let result = 0;
  while (i < string.length) {
    if (!answer.includes(string[i])) {
      answer.push(string[i]);
      count++;
      result = count;
    } else if (answer.includes(string[i])) {
      answer = [];
      answer.push(string[i]);
      count = 1;
    }
    console.log({ s: string[i], count: count });
    i++;
  }
  return result;
};
console.log(
  `The lendth of the longest substring without repeating a value is: ${longestSubstring(
    "pwwkew"
  )}`
);
