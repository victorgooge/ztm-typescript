/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/functions.html
//

function sayHello() {
    console.log("hello")
}
sayHello();

function sum(x, y) {
    return x + y;
}
const s = sum(5, 3);
console.log(s);
assert.equal(s, 8);

const answer1 = sum(2, 2);
const answer2 = sum(answer1, 2);
const answer3 = sum(answer1, answer2);
assert.equal(answer3, 10);


const multiply = (a, b) => {
    return a * b;
}
const m = 3 * 3;
console.log(m);
assert.equal(m, 9);

