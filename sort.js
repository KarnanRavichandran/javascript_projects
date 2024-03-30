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
