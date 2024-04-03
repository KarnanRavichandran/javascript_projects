
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

// const numbers = [10,20,30,40,50]
// const[first_No,second_No,...rest]  = numbers
// console.log(first_No);
// console.log(second_No)
// console.log(...rest)


// objects =>es6
// const users = {
//     name:"karnan",
//     age:25,
//     job:"Developer"
// }

// const{name,age,job} = users;
// console.log(name)
// console.log(age)
// console.log(job)

// default values
// const numbers = [10,20,]
// const[x,y, z =2] = numbers;
// console.log(x)
// console.log(y)
// console.log(z)


var data = [
    {
       "restaurantName":"Bronco",
       "address":"39 Rue des Petites Écuries, 75010 Paris",
       "lat":48.8737815,
       "long":2.3501649,
       "ratings":[
          {
             "stars":4,
             "comment":"Un excellent restaurant, j'y reviendrai !Par contre il vaut mieux aimer la viande."
          },
          {
             "stars":5,
             "comment":"Tout simplement mon restaurant préféré !"
          }
       ]
    },
    {
       "restaurantName":"Babalou",
       "address":"4 Rue Lamarck, 75018 Paris",
       "lat":48.8865035,
       "long":2.3442197,
       "ratings":[
          {
             "stars":5,
             "comment":"Une minuscule pizzeria délicieuse cachéejuste à côté du Sacré choeur !"
          },
          {
             "stars":3,
             "comment":"J'ai trouvé ça correct, sans plus"
          }
       ]
    }
 ];

 const[{restaurantName:restaurantName1,address:address1,ratings:[{stars:stars1}],restaurantName:restaurantName2,address:address2,ratings:[{stars:stars2}]}] = data;

 console.log(restaurantName1),
 console.log(address1),
 console.log(stars1)