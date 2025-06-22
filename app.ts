// data type ts
// number, string, array, boolean, object, any
// function  code on demand

// optional parameter

function Greet(name: string, age?: number): void {
  //
  const result = age ? " I am " + age + " years old" : "";
  console.log("Hi there I am " + name + result);
  // console.log("Hi there I am " + name + " and I am " + age + " years old");
}
Greet("Omid");
