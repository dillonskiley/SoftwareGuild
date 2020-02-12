/*
An array in JavaScript can be declared in a couple ways.
    - use square brackets ([]), separating each element (member) of the array with a comma (,).
    - Array object

    Index:   0      1      2        etc...
    Element: Aneki  Quell  Clarity  etc...

Ex:
*/
var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

/*
friends.length;
    - If we want to see how many friends we have in the friends array, we could look at its length property in the console:
*/
/*
friends[0];
Output: 
"Aneki"
*/

/*
Let's say we wanted to divide the friends up into two teams. Perhaps we can say that team 1 is made up of those have even index values, and team 2 is made up of those whose index value is odd.

What would that code look like?

Because the teams are going to be in new arrays but we don't know necessarily who is on them, we start by creating empty arrays with the Array() constructor.

Ex.
*/
// We need 2 teams - team1 and team2
var team1 = new Array();
var team2 = new Array();
/*
Now let's assign teams. We can loop through our friends array with a for loop. Because index values start at 0, we want our loop counter (i) to start at 0. We want the loop to run as long as the loop counter is less than the length of the array. Our logic looks like this:
 */
for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1

    } else {
        // otherwise add them to team 2

    }

    /* 
Working with Arrays as stacks
    We can use the push() and pop() functions to add and remove elements from an array using a similar concept.
    */
   for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1 
        team1.push(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.push(friends[i]);
    }
}
/* 
Input:
console.log(team1);
Output:
["Aneki", "Clarity", "Roghar"]

Input:
console.log(team2);
Output:
["Quell", "Sleepy", "DM Crimson"]
*/

/*
Working at the other end
    - push() and pop() work with the end of an array; two more functions that behave similarly but at the beginning of the array are unshift() and shift(). Thinking of that stack of pancakes, now we want to add pancakes to the bottom of the stack by unshifting them on. We would take pancakes from the bottom by shifting them off. 
*/

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1 
        team1.unshift(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.unshift(friends[i]);
    }
}
/*
Let's look at our teams as they were built with unshift().

Input:
console.log(team1);
Output:
["Roghar", "Clarity", "Aneki"]

Input:
console.log(team2);
Output:
["DM Crimson", "Sleepy", "Quell"]
 */

 /*
 Populating arrays with a for loop and indexes

    We could do the same exercise using the length property as the index to add elements to the end of an array. That would look like this:
*/

var team1 = new Array();
var team2 = new Array();

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1[team1.length] = friends[i];
    } else {
        // otherwise add them to team 2
        team2[team2.length] = friends[i];
    }
}

/*
Input:
console.log(team1);
Output:
["Aneki", "Clarity", "Roghar"]

Input:
console.log(team2);
Output:
["Quell", "Sleepy", "DM Crimson"]
*/

/* 
More Fun with Arrays - Fruits

    Here is another example of working with arrays – this time, with fruits;
*/
var fruits = ['kiwi', 'rambutan', 'mango', 'tomato'];
/*
Now, we pop() to take off the last element:
*/
fruits.pop(); // kiwi, rambutan, mango
/*
Now, we push() "gooseberry" to the end of the array:
 */
fruits.push('gooseberry'); // kiwi, rambutan, mango, gooseberry
/*
By calling shift(), we take away the first element of the array:
*/
fruits.shift(); // rambutan, mango, gooseberry
/*
With unshift() "banana", we set the new value at position 0:
 */
fruits.unshift("banana"); // banana, rambutan, mango, gooseberry

/*
Slice and Splice
    
    - slice() will get a number of elements, starting at the starting position. It returns the elements but does not change the array.
    - splice() on the other hand will return the elements that are removed and change the array.

    The fruits array is currently at:
*/
var fruits = ['banana', 'rambutan', 'mango', 'goosberry'];

fruits.slice(0, 2); //mango, goosberry

/*
Additional Tips for Working with Arrays

    - Another way to add an element to the end of an array without having to create a variable to track the position is by using the length property, which adds the new value as a new item at the end of the array.
*/
fruits[fruits.length] = "blueberry"; //mango, gooseberry, blueberry

fruits[2] = "pineapple"; // mango, gooseberry, pineapple

/*
Suppose we have to have dragonfruit at the position of index 5.
*/
fruits[5] = "dragonfruit"; // mango, gooseberry, pineapple, undefined, dragonfruit

