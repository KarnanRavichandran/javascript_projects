const numbers=[1,2,3,4,5,6,7,8,9,10];
// [1,2,3,4,5,6,7,8,9,10]
//  0,1,2,3,4,5,6,7,8,9,10 =>index poistion
//  1,2,3,4,5,6,7,8,9,10 => array elements
// slice(startIndexValue,endElementsValue)
let result = numbers.slice(4,10)
console.log(result)

const copy=[1,2,3,4,5,6,7,8,9,10];
let results = numbers.slice(2)
console.log(results)