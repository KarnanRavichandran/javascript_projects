const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num)=>{
    if(num %2 ==0){
        console.log(`even numbers ${num}`)
    }
})

// Filtering an array of objects to only include those with a certain property value:
let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
    ];

    const user = users.filter((user)=>user.age>25)
    console.table(user)
    console.log(user.name,user.age)