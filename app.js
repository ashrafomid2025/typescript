"use strict";
// enum and tuple
// default argument, rested parameter
// enum Grade {
//   fail = "fail",
//   pass = "pass",
// }
// enum condition {
//   loggedIn = "Log in",
//   loggedOut = "log out",
//   Active = "online",
// }
// // group , constant
// // array ,
// let listOfStudent: number[] = [1, 2, 3, 6];
// let list: [number, string, number, boolean] = [1, "Ali", 23, true];
// let Sinf: [number, string, number, number, string, number] = [
//   1,
//   "Ali",
//   45,
//   3,
//   "",
//   34,
// ];
// console.log(Sinf[4]);
// data type enum, tuple
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Purple"] = 2] = "Purple";
    Colors[Colors["Black"] = 3] = "Black";
})(Colors || (Colors = {}));
let listOfStudents = ["Ali", "Ahamd", "Taqi"];
// size 3, element: data type
let listOFSt = [
    1,
    "Ali",
    true,
    2,
    "Taqi",
    false,
];
console.log(listOFSt[4]);
