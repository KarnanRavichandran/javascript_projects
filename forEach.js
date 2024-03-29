// iteratvie element


// const array1 = ['a', 'b', 'c'];
// array1.forEach((val)=>{
//     console.log(val)
// })

// index value
// const array2 = ['a', 'b', 'c'];
// array1.forEach((val,index)=>{

//     console.log('index :'+val,)
//     console.log(val)
// })


// 


// const users =[
//     {full_name:"Ram",age:12,city:"Salem",salary:10000},
//     {full_name:"Sam",age:15,city:"Chennai",salary:10500},
//     {full_name:"Ravi",age:22,city:"Namakkal",salary:12000},
//     {full_name:"Joes",age:18,city:"Hosur",salary:6000},
//     {full_name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
//     {full_name:"Stanley",age:10,city:"Salem",salary:8000},
//   ];
//   console.table(users)

//   users.forEach((user)=>{
//     console.log(user.full_name,user.age,user.city,user.salary)
//   })

//   sunm2
// const numbers=[1,2,30,4,5,6,7,8,9,10];
// let sum = 0;
// numbers.forEach((number)=>{
//     sum += number
// })
// console.log(sum)

/*

*/

// const numbers = [1, 2, 30, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0; // Initialize sum to 0
// numbers.forEach((number) => {
//     sum += number * 2;
// });
// console.log(sum);

// max element of array

// const numbers = [1, 2, 30, 4, 5, 6, 7, 8, 9, 10];
// let max = numbers[0];
// numbers.forEach((number)=>{
//     if(number > max){
//         max = number;
//     }
// })
// console.log("The maximum number is:", max);

// avg
// const numbers = [1, 2, 30, 4, 5, 6, 7, 8, 9, 10];
// let sum=0;
// let avg ;
// numbers.forEach((number)=>{
//   sum +=number;

// })
// console.log(sum/numbers.length)


// even numbers
// const numbers = [1, 2, 30, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((number)=>{
//     if(number % 2 ==0){
//         console.log(`even number is ${number}`)
//     }
// })

// uppercase
const names = ['karnan','dhanu','nirmal','vicky']

names.forEach((name,index)=>{
    names[index] = name.toUpperCase()
})
console.log(names)

