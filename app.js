"use strict";
// const message: string = "Hi typescript course";
// console.log(message);
let myName = "Mohammad Ashraf Omid";
let age = 29;
let isProgrammer = true;
let city = "Ghazni";
let numbers = [1, 2, 3, 4, 5, 7];
let cities = ["Kabul", "Ghazni", "Herat"];
let person = ["Ali", 30];
let person1 = {
    name: "Mohammad Ashraf Omid",
    age: 29,
    gender: "Male",
};
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
let up = Direction.up;
console.log(up);
var status1;
(function (status1) {
    status1[status1["active"] = 1] = "active";
    status1[status1["reactive"] = -1] = "reactive";
    status1[status1["pending"] = 0] = "pending";
})(status1 || (status1 = {}));
console.log(status1.reactive);
const list = { name: "Ali", FatherName: "Jalil" };
const list1 = [1, 2, 3, 4, 5, 5, 6];
console.log(list1);
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Purple"] = "Purple";
})(Color || (Color = {}));
let favColor = Color.Purple;
console.log(favColor);
function Hello(name) {
    return `Hello how are you ${name}`;
}
console.log(Hello("Mohammad Ashraf Omid"));
