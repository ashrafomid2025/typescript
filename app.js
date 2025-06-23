"use strict";
function Salaam(name, message = "لطفا درس های تان بخوانید") {
    console.log("HI there", name + " " + message);
}
Salaam("Omid");
// ... never, default argument, rested parameter
function Jam(...a) {
    let natija = 0;
    for (let num of a) {
        natija += num;
    }
    console.log(natija);
}
Jam(6, 5, 10, 11, 23, 90);
Jam(3, 4);
Jam(5, 4, 2, 3, 7);
