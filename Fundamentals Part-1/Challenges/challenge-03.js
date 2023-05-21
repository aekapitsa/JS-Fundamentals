"use strict";

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
// console.log(mikeTest, johnTest);