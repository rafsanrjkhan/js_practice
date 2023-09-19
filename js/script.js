console.log()
// Premitive types
// number, string, boolean

// deals with value
// different address
let a = 7;
let b = a; // b = 7
a = 45;
console.log(b);

// Refenrence type
// array, object
// address
let numbers = [1, 2, 3]
let newNumbers = numbers;
console.log(newNumbers); // [1, 2, 3]
numbers[1] = 500;
console.log(numbers); // [1, 500, 3]
console.log(newNumbers); // [1, 500, 3]


// student = {name:"Rahim", age:25, hometown:"Dhaka"}
// student["name"]
// student.name


// student = {}
// student["name"] = "Rahim"


// delete simanta.name 