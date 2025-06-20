// const message: string = "Hi typescript course";
// console.log(message);

let myName: string = "Mohammad Ashraf Omid";
let age: number = 29;
let isProgrammer = true;

let city: string = "Ghazni";
let numbers: number[] = [1, 2, 3, 4, 5, 7];
let cities: Array<string> = ["Kabul", "Ghazni", "Herat"];

let person: [string, number] = ["Ali", 30];
let person1: { name: string; age: number; gender: string } = {
  name: "Mohammad Ashraf Omid",
  age: 29,
  gender: "Male",
};
enum Direction {
  up,
  down,
  left,
  right,
}
let up: Direction = Direction.up;
console.log(up);
enum status1 {
  active = 1,
  reactive = -1,
  pending = 0,
}
console.log(status1.reactive);
const list: any = { name: "Ali", FatherName: "Jalil" };
const list1: Array<number> = [1, 2, 3, 4, 5, 5, 6];
console.log(list1);

enum Color {
  Red = "Red",
  Green = "Green",
  Purple = "Purple",
}

let favColor: Color = Color.Purple;
console.log(favColor);

function Hello(name: string): string {
  return `Hello how are you ${name}`;
}
console.log(Hello("Mohammad Ashraf Omid"));

function Message(message: string): void {
  console.log(message);
}
Message("This is a message from there");
function Person(name: string, age?: number): string {
  let ageCondition = age
    ? "I am " + age + " years old"
    : " I don't like to share my age with you";
  let entireMessage = "Hi this is " + name + ageCondition;
  return entireMessage;
}
console.log(Person("Hello"));
