let output = [];
function twoSum(nums, target) {
  let first;
  for (let i = 0; i < nums.length; i++) {
    first = target - nums[i];
    if (nums.includes(first)) {
      output.push(nums[i]);
    }
  }
  output.filter((element, index) => {
    console.log(output[index + 1]);
  });
}
console.log(twoSum([3, 3], 6));
