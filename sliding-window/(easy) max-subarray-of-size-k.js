/* Given an array of positive numbers and a positive number ‘k,’
 find the maximum sum of any contiguous subarray of size ‘k’. */

const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0;
  let curSum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    curSum += arr[end];
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, curSum);
      curSum -= arr[start];
      start++;
    }
  }
  return maxSum;
  /* 
declare maxSum equal to 0
declare curSum equal to 0
declare windowStart
iterate arr with windowend 
  build curSum
  if windowEnd is greater than equal to k (we've met windowSize)
    MathMax (maxSum and curSum)
    subtract windowStart from curSum
    increment curSum
return maxSum */
};

// TEST CASES
const arr = [1, 5, 8, 3, 9, 4, 7, 5, 6];
max_sub_array_of_size_k(2, arr); //?
