function isPalindrome(string) {
  const sortedString = string.split("").reverse().join("");
  if (string === sortedString) {
    return true;
  } else {
    return false;
  }
}

function firstPalindrome(array) {
  let i;
  for (i = 0; i < array.length; i++) {
    if (isPalindrome(array[i])) {
      return array[i];
    }
    if (!isPalindrome(array[i]) && i === array.length - 1) {
      return "empty";
    }
  }
}
// const test = ["abc", "car", "racecar", "ada", "cool"];
const words = ["def", "ghi"];
console.log("The first palindrome in ", words, " is ", firstPalindrome(words));
