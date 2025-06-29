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
enum Colors {
  Red,
  Green,
  Purple,
  Black,
}
let listOfStudents: string[] = ["Ali", "Ahamd", "Taqi"];
// size 3, element: data type
let listOFSt: [number, string, boolean, number, string, boolean] = [
  1,
  "Ali",
  true,
  2,
  "Taqi",
  false,
];
enum Color {
  red,
  purple,
  green,
}
console.log(listOFSt[4]);
// tuples are array like structured but there is something different fixed sized, data type for each element
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid argument");
}
function add(a: number, b: number): string;
function add(a: string, b: string): string;
function add(a: string | number, b: number | string): number | string {
  return a + b;
}
