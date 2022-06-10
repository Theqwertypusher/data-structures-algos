/* You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']*/

const fruits_into_baskets = function (fruits) {
  const cache = {};
  let start = 0;
  let max = 0;
  for (let end = 0; end < fruits.length; end++) {
    const fruit = fruits[end];

    if (!cache[fruit]) cache[fruit] = 0;
    cache[fruit]++;

    while (Object.keys(cache).length > 2) {
      const fruit = fruits[start];
      cache[fruit]--;
      if (cache[fruit] === 0) {
        delete cache[fruit];
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
  // declare empty cache
  // declare start set to zero
  // iterate with end
  // if curEl not in cache
  // add curEl to cache
  // increment curEl in cache
  // while cache keys length is greater than 2
  // decrement el at index start from cache
  // if el in cache equals zero
  // delete property
  // set max equal to Math.max of max and end minus start plus 1
  // return end minus start plus 1
};

const fruit = ["A", "B", "C", "A", "C"];
const fruit2 = ["A", "B", "C", "B", "B", "C"];
console.log(fruits_into_baskets(fruit));
console.log(fruits_into_baskets(fruit2));

/* 
NOTES
- when adding to cache - set to zero; then have separate increment 
- when determining max - use Math.max
*/
