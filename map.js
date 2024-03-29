const numbers = [1, 2, 3, 4, 5];

let sqrt = numbers.map((number,index)=>{
     return Math.sqrt(number).toFixed()
})
console.table(sqrt)


const users =[
    {name:"Sam",age:15,city:"Chennai",salary:10500},
    {name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {name:"Joes",age:18,city:"Hosur",salary:6000},
    {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {name:"Stanley",age:10,city:"Salem",salary:8000},
    {name:"Ram",age:12,city:"Salem",salary:10000},
  ];
  console.table(users)

    let eligibleStatus = users.map((user)=>({
        //  name:user.name,
        //  age:user.age,
        //  city:user.city,
        //  salary:user.salary,
        ...user,
         status:user.age >=18?'Eligible' :"Not Eligible"
    }))
    console.table(eligibleStatus)

    const numberss = [1, 2, 3, 4, 5];

    let result = numbers.map((numbers =>console.log(numbers*2)))
    
    // commbing arrays
    const furits = ['apple','banana'];
    const colors = ['red','green'];
    const combainfurites = furits.map((furit,index)=>furit+'-'+colors[index])
    console.log(combainfurites)


