
// beafor es6

// const numbers = [10,20,30,40,50]
// const first_Number = numbers[0]
// const second_Number = numbers[1]
// const third_Number = numbers[2]
// const result = numbers.splice(2)
// console.log(first_Number)
// console.log(second_Number)
// console.log(third_Number)
// console.log(result)

// after es6

const numbers = [10,20,30,40,50]
const[first_No,second_No,...rest]  = numbers
console.log(first_No);
console.log(second_No)
console.log(...rest)