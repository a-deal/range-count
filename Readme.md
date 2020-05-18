# Range Count

> Consider the problem of counting occurrences of a given value `x` within a sorted array a. For example, if `x=5` and `a=[1,1,2,4,5,5,7,9]`, then the count is
> 1. Write a function that solves this problem by performing a linear scan.
> 2. Next, write a function that solves this problem by performing two binary searches.
> 3. Finally, benchmark your two functions for random sorted arrays of size 10, 100, ..., up to 10,000,000. How does performance compare between the two functions?

Better performance favors `countBinarySearch` up until where `n = 10 ** 5`. Beyond this point, it suffers dramatic *time to completion* increases due to the expensive use of `Array.slice()`. Given a chance to refactor, `countBinarySearch` would benefit greatly in its time and space complexity with the elmination of subarray copying and the use of only indices to mark the left and right bounds of subarrays to determine which path to descend to find a target value.


### Guide

To begin, install dependencies: `npm install`

To test and compare the algorithms: `npm run test`
