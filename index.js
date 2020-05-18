/*
Input: targetNumber <number>, numbers <sorted array>
Output: numOfOccurrences <number>

Prompt: Given a sorted array and target value, count the occurrences of the target value

*/
const assert = require('assert')
const now = require('performance-now')
const countLinearScan = require('./countLinearSearch.js')
const countBinarySearch = require('./countBinarySearch.js')
const tests = require('./testCases.json')

// Test Correctness
assert.strictEqual(countBinarySearch(5, [1, 1, 2, 4, 5, 5, 7, 9]), 2)
assert.strictEqual(countBinarySearch(8, [1, 1, 2, 4, 5, 5, 7, 9]), 0)
assert.strictEqual(countBinarySearch(9, [9]), 1)
assert.strictEqual(countBinarySearch(2, []), 0)
assert.strictEqual(countLinearScan(5, [1, 1, 2, 4, 5, 5, 7, 9]), 2)
assert.strictEqual(countLinearScan(8, [1, 1, 2, 4, 5, 5, 7, 9]), 0)
assert.strictEqual(countLinearScan(9, [9]), 1)
assert.strictEqual(countLinearScan(2, []), 0)

// Test performance
profiler(countLinearScan, tests.ten)
profiler(countBinarySearch, tests.ten)
profiler(countLinearScan, tests.hundred)
profiler(countBinarySearch, tests.hundred)
profiler(countLinearScan, tests.thousand)
profiler(countBinarySearch, tests.thousand)
profiler(countLinearScan, tests.tenthousand)
profiler(countBinarySearch, tests.tenthousand)
profiler(countLinearScan, tests.hundredthousand)
profiler(countBinarySearch, tests.hundredthousand)
profiler(countLinearScan, tests.million)
profiler(countBinarySearch, tests.million)
profiler(countLinearScan, tests.tenmillion)
profiler(countBinarySearch, tests.tenmillion)

// Helpers
function profiler(fn, test) {
  const start = now()
  const actual = fn.apply(null, [test[0], test[1]])
  const end = now()
  console.log(
    `************
     Function: ${fn.name}
     Size: ${test[1].length}
     Expected Occurrences: ${test[2]}
     Actual Occurrences Counted: ${actual}
     Time to Completion: ${end - start} milliseconds`
  )
}


// Test Case
