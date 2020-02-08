/* Control Flow

    Control flow is the order in which a program's lines of code are executed. 
*/

/* if/else and conditional statements

    An if statement will execute code only if a certain condition is met. If the condition evaluates to true, it will execute a block of code - code inside curly braces {…} following the if statement. If the condition evaluates to false, the program skips over the block of code and the normal flow of the program continues.
    Ex:
*/

if (true) {
    //any code placed here will be executed
  }
   
  if (false) {
    //any code placed here will be skipped over
  }

/* 
    If you want a different block of code to run if the condition evaluates to false, you can add the else keyword after the closing curly brace, followed by another block of code to be executed.

    Think about a traffic light - based on the light color or state of the traffic light, certain actions should be taken.  The following example is looking for input from the user about STOP, SLOW, or GO.

    If (if) the user enters STOP, then we will both log a message to the console and display a pop-up to notify the user what to do.
    Otherwise (else), if the user enters something else, log a message to the console and display a pop-up to tell the user to GO!
    Ex:
 */

var direction = prompt("Should we STOP, SLOW, or GO?");
if (direction == "STOP") {
    console.log("STOP!");
    alert("STOP!");
} else {
    console.log("GO!");
    alert("GO!");
}

/* 
You can also combine else and if to add another condition to else. Using this example, let's add notification for the SLOW part.
Ex:
*/
var direction = prompt("Should we STOP, SLOW, or GO?");
if (direction == "STOP") {
    console.log("STOP!");
    alert("STOP!");
} else if (direction == "SLOW") {
    console.log("SLOW DOWN!");
    alert("SLOW DOWN!");
} else {
    console.log("GO!");
    alert("GO!");
}
