/* Given an array of positive integers and a number ‘S,’ 
find the length of the smallest contiguous subarray 
whose sum is greater than or equal to ‘S’. 
Return 0 if no such subarray exists. */

const smallest_subarray_sum = function (s, arr) {
  let sum = 0;
  let start = 0;
  let length = Infinity;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s) {
      length = Math.min(length, end - start + 1);
      console.log(length);
      sum -= arr[start];
      start++;
    }
  }
  return length;
  /* 
declare sum
declare start
declare length set to zero 
iterate with end 
    add cur val to sum
    while sum is greater than target 
        Mathmin of length and difference of end and start
        subtract start value from sum
        increment start
return length */
};

// TEST CASES
const arr = [2, 1, 5, 2, 3, 2];
smallest_subarray_sum(7, arr); //?

const arr2 = [2, 1, 5, 2, 8];
smallest_subarray_sum(7, arr2); //?

// NOTES
/* use Infinity or Math.max_value or Math.min_value for starting */
