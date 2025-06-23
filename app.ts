function Salaam(
  name: string,
  message: string = "لطفا درس های تان بخوانید"
): void {
  console.log("HI there", name + " " + message);
}
Salaam("Omid");
// ... never, default argument, rested parameter
function Jam(...a: number[]): void {
  let natija = 0;
  for (let num of a) {
    natija += num;
  }
  console.log(natija);
}

Jam(6, 5, 10, 11, 23, 90);
Jam(3, 4);
