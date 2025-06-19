// const message: string = "Hi typescript course";
// console.log(message);
var myName = "Mohammad Ashraf Omid";
var age = 29;
var isProgrammer = true;
var city = "Ghazni";
var numbers = [1, 2, 3, 4, 5, 7];
var cities = ["Kabul", "Ghazni", "Herat"];
var person = ["Ali", 30];
var person1 = {
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
var up = Direction.up;
console.log(up);
var status1;
(function (status1) {
    status1[status1["active"] = 1] = "active";
    status1[status1["reactive"] = -1] = "reactive";
    status1[status1["pending"] = 0] = "pending";
})(status1 || (status1 = {}));
console.log(status1.reactive);
var list = { name: "Ali", FatherName: "Jalil" };
var list1 = [1, 2, 3, 4, 5, 5, 6];
console.log(list1);
