/*
Sub - prompt B: Implement
function to do binary search
Base Cases:
  -input array is of one or none in length -
  if of one, check
if item matches target
  -
  otherwise
return 0
Recursive Cases
  -
  Initialize counter -
  Retrieve middle index -
  If target is less than or equal to item at middle index, recurse with lower half of input array -
  Add resulting expression to counter -
  If target is greater than or equal to item at middle index, recurse with upper half of input array -
  Add resulting expression to counter -
  return counter
*/
module.exports = function countBinarySearch(target, sortedNums) {
  if (sortedNums.length < 1) return 0
  if (sortedNums.length < 2) return sortedNums[0] === target ? 1 : 0
  let count = 0,
    middleIndex = Math.round(sortedNums.length / 2)

  if (target <= sortedNums[middleIndex]) {
    count += countBinarySearch(target, sortedNums.slice(0, middleIndex))
  }
  if (target >= sortedNums[middleIndex]) {
    count += countBinarySearch(target, sortedNums.slice(middleIndex))
  }

  return count
}
