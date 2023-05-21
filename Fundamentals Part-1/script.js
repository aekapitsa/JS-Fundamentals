"use strict";

// let textToPrint = "Something";
// console.log(textToPrint);
//
// const PI = 3.14;
// console.log(PI);

let test = "Try to have fun 🤣🤣";
console.log(test);
//
// let inputValue = "1991";
// inputValue = Number(inputValue);
//
// console.log("I am" + 23 + "years old");

// let a = 2 + 3 + 4;
// console.log(`Ternary test: ${a >= 10 ? "Great!" : "uff"}`);

// function logger() {
//     console.log("Anton!");
// }
//
// logger();
//
// const logger1 = function() {
//     console.log("Anton!");
// }
//
// logger1();
//
// const logger2 = () => console.log("Anton!");
// logger2();
//
// const friends = ["Koba", "Nunu"];
// const years = new Array(1991, 1992, 1993);
//
// console.log(friends[friends.length - 1]);
//
// friends[5] = "Salome";
// console.log(friends);

// const userJonas = {
//     name: "Jonas",
//     job: "teacher",
//     birthYear: 1995,
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     driverLicense: false,
//
//     getSummary: function () {
//         return `${this.name} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.driverLicense ? "" : "not "}a driver's license.`
//     }
// }
//
// console.log(userJonas.getSummary());

const mike = {
    fullName: "Mike",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

const john = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}

const mikeTest = mike.calcBmi();
const johnTest = john.calcBmi();
console.log(mikeTest, johnTest);


