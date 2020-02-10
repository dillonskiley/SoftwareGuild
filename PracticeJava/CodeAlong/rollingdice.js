/*
Math.ceil(0.9394775930471786)
value = 1
    - ceil is short for ceiling. Much like a ceiling is the top of a room, Math.ceil() rounds up to the nearest whole number.

Math.floor(0.9394775930471786)
value = 0
    - Much like a floor is the bottom of a room, Math.floor() rounds down to the nearest whole number.

Math.round(0.9394775930471786) 	1 	
    - Math.round() rounds up or down to the nearest whole number.
*/

Math.floor(Math.random() * 6);
/* 
Output is a random number between 1 and 6 */

for (var i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random() * 6) + 1);
  }
/*
Now all we have to do is add 1 to the results to get values that range from 1 to 6.
 */
/*

    - Math.random() : JavaScript generates a random number between 0 and not‑quite 1.
    - Math.random() * 6: JavaScript multiplies the random number by 6, resulting in a number between 0 and not‑quite 6.
    - Math.floor(Math.random() * 6) : JavaScript rounds down the current value to the nearest integer, resulting in a value that is 0, 1, 2, 3, 4, or 5.
    - Math.floor(Math.random() * 6) + 1 : JavaScript adds 1 to the current value, resulting in an integer between 1 and 6, inclusive, which is exactly what we need.
 */

 /* 
 Rolling Dice
  */
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
  }
   
  for (var i = 0; i < 100; i++) {
    console.log(rollDice());
  }
  