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
var listOfStudents = ["Ali", "Ahamd", "Taqi"];
// size 3, element: data type
var listOFSt = [
    1,
    "Ali",
    true,
    2,
    "Taqi",
    false,
];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["purple"] = 1] = "purple";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
console.log(listOFSt[4]);
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid argument");
}
