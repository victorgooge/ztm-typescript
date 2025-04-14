/* eslint-disable */
import { strict as assert } from "assert";

// NOT
const writing = true;
const reading = !writing; // (false);

// OR
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie; // evaluates to true because rating is 9
// short circuit -> first condition true, so suggestMovie becomes true
assert.equal(suggestMovie, true);

// AND
const age = 18;
const isTeen = age >= 13 && age < 20;
assert.equal(isTeen, true);


const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);
// saying !feeExemption = if we do not have a fee exemption
// here we will definitely owe the extra fee as we meet all of the requirements for a fee

