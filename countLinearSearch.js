/*
Sub - prompt A: Implement a function to do a linear scan -
  Initialize counter -
  Iterate through list -
  If current value is less than the target,
  continue -If current value equals the target, increment counter -
  If current value is more than the target, exit -
  Return counter -
  Analysis - O(n) Time Complexity / O(1) Space
*/
module.exports = function countLinearSearch(target, sortedNums) {
  let counter = 0
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] < target) continue
    if (sortedNums[i] === target) counter++;
    continue
    if (sortedNums[i] > target) break
  }
  return counter
}
