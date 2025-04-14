/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//

/* TYPES */
// Strings
const courseName = "typescript"; // double-quotes
const courseName2 = 'typescript'; // single-quotes
const courseName3 = `typescript`; // back-quotes (different from double and singles)

// Numbers
const d = 10;
const frac = 10.0;
const exp = 1e3;
const octal = 0o777;
const hex = 0xff;
const bin = 0b0100001;
const bigInt = 9000n; // n indicates big int

// Boolean
const t = true;
const f = false;

// Other
const und = undefined; // completely missing
const empty = null; // know it's missing



/* LET */
let someNum = 0;
someNum = 1;
someNum = 2;
// can change values as opposed to const



/* TEST CODE */
// use curly braces to create local block
{
    let someNum = 5;
}
{
    let someNum = 4;
}
{
    let someNum = 8;
}
/* 
notice how each block ignores each other
if these variables were written outside of these blocks then 
we would get an error
*/



/* UNINITIALIZED VARIABLES */
let hello;
hello = "hello";
hello = 'hi';
hello = `hey`;
// typescript will give an error if we accidentally try to use an unassigned var
// note this wont work for const variables

// const bye;    ERROR: TS -> 'const' declarations must be intitalized




