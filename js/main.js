
// ? entries()
 
// let myObject = {
//     firstName: "Mustafa",
//     lastName: "Mahmudov",
//     age: 23,
//     job: "Software Developer",
// }

// console.log(Object.entries(myObject));

// ? keys()

// let myObject = {
//     firstName: "Mustafa",
//     lastName: "Mahmudov",
//     age: 23,
//     job: "Software Developer",
// }

// console.log(Object.keys(myObject));

// ? values()

// let myObject = {
//     firstName: "Mustafa",
//     lastName: "Mahmudov",
//     age: 23,
//     job: "Software Developer",
// }

// console.log(Object.values(myObject));


// ? this

// let obj = {
//     firstName: "Java",
//     lastName: "Script",
//     dateOfBirth: "01.01.1970",
//     calculateAge()
//     {
//         let age = +this.dateOfBirth.split(".")[2];
//         return 2023 - age;
//     },
// }

// console.log(obj.calculateAge());


// ? new Date()

// let time = new Date();

// console.log(time);



// ? New Date(milliseconds)

// const time = new Date(0);

// console.log(time);

// const time1 = new Date(1000000000000);

// console.log(time1);


// ? new Date(date String)

// const time = new Date("1999-11-15");
// console.log(time);

// const time1 = new Date("1999-11");
// console.log(time1);

// const time2 = new Date("1999");
// console.log(time2);


// ? new Date(year, month, day, hours, minutes, seconds, milliseconds);

// let time = new Date(1999, 10, 15, 11, 10, 15);
// console.log(time);

// let time1 = new Date(1999, 10, 15, 10);
// console.log(time1);

// let time2 = new Date(1999, 10);
// console.log(time2);


// ? Date.now() Method


// let time = Date.now();

// console.log(time);



// ? getFullYear() Method

// let time = new Date();

// console.log(time.getFullYear());




// ? getMonth() Method

let time = new Date();
let month = ["January", "Feburary", "March", "April", "May", "June", "July", "Augustos","September", "October", "November","December"];

console.log(time.getMonth());
console.log(month[time.getMonth()]);
