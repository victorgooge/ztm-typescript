/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//

let n = 1;
n++; // postfix
assert.equal(n, 2);
++n; // prefix
assert.equal(n, 3);

n = 5
const j = n++; // NOTE: you really don't want to assign varaibles with postifx++ increments (could be confusing)
assert.equal(j, 5);
assert.equal(n, 6);

const k = ++n; // you could instead use ++prefix as a better assignment
assert.equal(k, 7);
assert.equal(n, 7);

// decrement
n = 5;
const t = --n;
assert.equal(t, 4);
assert.equal(n, 4);

const u = n--;
assert.equal(u, 4);
assert.equal(n, 3);


// arithmetic assignment: A better use for assigning values that need to be incremented
// (++ or -- are better during looping and such)
n = 10;
n += 5;
assert.equal(n, 15);
n -= 2;
assert.equal(n, 13);
// better also because we can increment by any x value instead of just by 1

/*
also have:
    *=
    /=
    %=
*/
