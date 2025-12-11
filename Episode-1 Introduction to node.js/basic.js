const { CalculateSum, CalculateSub, CalculateDiv, CalculatePro } = require("./calculation")
const data = require("./data.json")

let a = 10
let b = 5
CalculateSum(a, b)
CalculateSub(a, b)
CalculateDiv(a, b)
CalculatePro(a, b)
console.log(data)

