/* Given a string, find the length of the longest substring
 in it with no more than K distinct characters. 
 
 EXAMPLE 1
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

EXAMPLE 2
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
s
EXAMPLE 3
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 
 */

const longest_substring_with_k_distinct = function (str, k) {
  const cache = {};
  let cacheKeyCount = 0;
  let maxLength = 0;
  let curLength = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!cache[char]) {
      cache[char] = 1;
      cacheKeyCount++;
    } else {
      cache[char]++;
    }
    curLength++;
    while (cacheKeyCount > k) {
      const el = str[start];
      cache[el]--;
      curLength--;
      if (cache[el] === 0) {
        delete cache[el];
        cacheKeyCount--;
      }
      start++;
    }
    maxLength = Math.max(curLength, maxLength);
  }

  return maxLength;
  // declare cache
  // declare Maxlength
  // declare curLength
  // declare start
  // declare cacheCount
  // iterate input str
  // if curEl not in cache
  // add to cache and set to one
  // increment cacheCount
  // else
  // increment curEl in cache
  // increment curLength
  // while cacheCount is greater than k
  // access cache with input str at the start index and decrement count and curLength
  // if cache at el equals zero
  // delete property
  // increment start
  // MathMath curLenghh, and maxLength
  // return maxLength
};

const str = "araaci";
const str2 = "cbbebi";
console.log(longest_substring_with_k_distinct(str, 2));
console.log(longest_substring_with_k_distinct(str, 1));
console.log(longest_substring_with_k_distinct(str2, 3));

/* 
NOTES
- can replace curLength using (end - start)
- alternative to cacheKeyCount is explicity using Object.keys within while conditional
*/
