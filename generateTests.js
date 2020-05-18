const fs = require('fs')
const countLinearScan = require('./countLinearSearch.js')

function generateList(magOrder) {
  let nums = [],
    ceiling = Math.pow(10, magOrder)
  for (let i = 0; i < ceiling; i++) {
    nums.push(Math.round(Math.random() * ceiling))
  }
  return nums.sort((a, b) => a - b)
}

function prepTestCase(nums) {
  let randomIndex = Math.floor(Math.random() * nums.length)
  return [nums[randomIndex], nums, countLinearScan(nums[randomIndex], nums)]
}


fs.writeFileSync('testCases.json', JSON.stringify({
  ten: prepTestCase(generateList(1)),
  hundred: prepTestCase(generateList(2)),
  thousand: prepTestCase(generateList(3)),
  tenthousand: prepTestCase(generateList(4)),
  hundredthousand: prepTestCase(generateList(5)),
  million: prepTestCase(generateList(6)),
  tenmillion: prepTestCase(generateList(7))
}))
