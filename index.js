/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = 1000000000 + oldID;
// let ageIsValid = if (newID == integer) {
//   true
// } else {
//   false
// }
let ageIsValid = Number.isInteger(currentAge);
const randomNumber = (Math.random() * 20) + 1;
const randomInteger = Math.floor(randomNumber);
// const randomUserID =
const randomUserID = 1000000000 + randomInteger;
