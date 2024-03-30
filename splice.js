/*
  Splice is to Remove Elements in array
  It will change original array

  removed_element=Splice(start,length,new elements)
*/

const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let remove = n1.splice(2); // Remove all elements starting from index 2 to the end
console.log(remove); // Output: [3, 4, 5, 6, 7, 8, 9, 10]
console.log(n1); // Output: [1, 2] - n1 now contains elements [1, 2]



const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let remove1 = n2.splice(2,1,120); // Remove all elements starting from index 2 to the end
console.log(remove); // Output: [3, 4, 5, 6, 7, 8, 9, 10]
console.log(n1); // Output: [1, 2] - n1 now contains elements [1, 2]



const n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let remove2 = n3.splice(2,0,12); // Remove all elements starting from index 2 to the end
console.log(remove2); // Output: [3, 4, 5, 6, 7, 8, 9, 10]
console.log(n3); // Output: [1, 2] - n1 now contains elements [1, 2]
