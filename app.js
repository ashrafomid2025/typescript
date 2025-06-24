"use strict";
// enum and tuple
// default argument, rested parameter
var Grade;
(function (Grade) {
    Grade["fail"] = "fail";
    Grade["pass"] = "pass";
})(Grade || (Grade = {}));
var condition;
(function (condition) {
    condition["loggedIn"] = "Log in";
    condition["loggedOut"] = "log out";
    condition["Active"] = "online";
})(condition || (condition = {}));
// group , constant
// array ,
let listOfStudent = [1, 2, 3, 6];
let list = [1, "Ali", 23, true];
let Sinf = [
    1,
    "Ali",
    45,
    3,
    "Hanif",
    34,
];
console.log(Sinf[4]);
