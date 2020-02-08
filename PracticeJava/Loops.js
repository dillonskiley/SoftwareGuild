/* Loops
    Loops let you run a block of code multiple times, until a test condition is met. Loops are most commonly run against a data set (arrays or objects). The most common loops you will use in JavaScript are the while loop and the for loop.
*/

for (var loopCounter = 0; loopCounter <= 4; loopCounter++) {
    console.log(loopCounter);
}
/* 
Output:
0
1
2
3
4

Let's break down the condition that is in the parentheses to better understand how this for loop works.

    The first thing we have in the for declaration is var loopCounter = 0;. This creates a variable named loopCounter and sets its value to 0. This is typically the counter declaration and initializer.
    The next part of the for declaration, loopCounter <= 4; simply states that the block of code that follows the condition will execute as long as loopCounter's value is less than or equal to 4. This is the test condition.
    The third part of the for declaration, loopCounter++, adds 1 to the current value of loopCounter. Writing a ++ after a variable is a short-hand way of writing loopCounter = loopCounter + 1. Terms used for this may include loop increment or loop step.  Note: while some use the term increment, you can also start at a higher number and work lower using the unary decrement (--) operator to decrement the loop counter.

Let's put it all together now.

    The first time the loop runs, the value of loopCounter is 0.
    The loop checks to see if the value of loopCounter is less than or equal to 4. Since the value of loopCounter is currently 0, the condition evaluates to true, and the block of code is executed.
    The block of code prints the value of loopCounter to the developer console and then adds 1 to the value of loopCounter, making the value of loopCounter = 1.
    The loop runs again, checking if loopCounter is less than or equal to 4. Since the value of loopCounter is now 1, the condition evaluates to true, and the block of code is executed, printing the current value of loopCounter to the developer console, then adding 1 to the current value of loopCounter. This continues until loopCounter = 5.
    Once the value of loopCounter is greater than 4, the condition loopCounter <= 4; evaluates to false. This stops the for loop from executing the block of code. The loop is finished and will not execute again.

    The final result is the numbers 0-4 being printed to the developer console.
 */

 /* The While Loop

    A while loop runs as long as its condition is met. We could perform the same tasks as above with a while loop, as seen in the following code:
 */

var loopCounter = 0;
while (loopCounter <= 4) {
     console.log(loopCounter);
     loopCounter++
}

/*
The above while loop will output the numbers 0-4 to the developer console. The output should be:

0
1
2
3
4

Notice in the above code:

    We start with a declaration var loopCounter = 0;. This creates a variable named loopCounter and sets its value to 0 before entering the loop.
    The loop's condition is in the parentheses after while.
    The loop's counter is modified within the while loop.

    There is a variant of the while loop called a do... while loop. The while loop may never execute, depending on the condition; however, the do... while loop will execute at least once and then continue to repeat as long as the condition is met.

    Suppose we want to get a number from a user between 1 and 10. We need to ask the user for a value at least once, so this would be a good opportunity to look at the do... while loop. The following code will continue to prompt a user for a number between 1 and 10 until the condition is met.
*/

do {
    userInput = prompt("Give me a number between 1 and 10.");
    if (userInput <= 0 || userInput > 10) {
        alert("The number must be between 1 and 10");
    }
} while (userInput > 10 || userInput <= 0);
console.log(userInput);
