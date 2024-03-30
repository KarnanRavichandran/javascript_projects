const names=["Kumar","Aureen","Joes","Zara","Stanley"];
console.log("Before Sort : "+names);
const result = names.sort()
console.log("After Sort : "+names);

// asending order
const num=[10,100,25,150,45,80,9];
console.log(" ascending order Before Sort : "+num);
num.sort((a,b)=>{
    return a-b;
});

console.log(" ascending order After Sort : "+num);


// desending order
const num1=[10,100,25,150,45,80,9];
console.log(" decending order Before Sort : "+num1);
num1.sort((a,b)=>{
    return b-a;
});

console.log(" decending order After Sort : "+num1);


const users =[
    {name:"Ram",age:12,city:"Salem",salary:10000},
    {name:"Sam",age:15,city:"Chennai",salary:10500},
    {name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {name:"Joes",age:18,city:"Hosur",salary:6000},
    {name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {name:"Stanley",age:10,city:"Salem",salary:8000},
  ];
  console.table(users);
 users.sort((a,b)=>{
    return a.age-b.age
 })

 users.sort((a,b)=>{
    if(a.name>b.name) return 1
    if(a.name<b.name) return -1
    return 0
 })
 console.table(users);
