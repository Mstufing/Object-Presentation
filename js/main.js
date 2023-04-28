
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

let obj = {
    firstName: "Java",
    lastName: "Script",
    dateOfBirth: "01.01.1970",
    calculateAge()
    {
        let age = +this.dateOfBirth.split(".")[2];
        return 2023 - age;
    },
}

console.log(obj.calculateAge());