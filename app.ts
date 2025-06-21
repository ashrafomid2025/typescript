let cities: string[] = ["Kabul", "Ghazni", "Herat"];
const list: Array<number> = [1, 2, 3, 4, 5];
const person: { id: number; name: string; age: number } = {
  id: 1,
  name: "Omid",
  age: 12,
};
// any
let listOfStudents: any[] = [1, "Ali", "Fatima", 34];
// function => code on demand void
function Hello(name: string): string {
  return "Hello dear" + name;
}
function Add(number1: number, number2: number): number {
  return number1 + number2;
}

const result = Add(2, 10);

function Greet(name: string): void {
  console.log("سلام علیکم و رحمت الله" + name);
}

Greet("اسماعیل");
