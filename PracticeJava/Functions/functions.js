/* 
To call functions:
console.log(foo)

foo is an argument

An object is a type of value in JavaScript that is made up of properties (states, attributes, descriptions) and functions (things the object can do).

    - console.debug() and console.log() output are similar – typically black text, white background, and no icon.

    - console.info() output may start with an icon that has a white lowercase i in a blue circle and may have a light blue background.

    - console.warn() output may have an exclamation mark icon and possibly a light yellow background.

    - console.error() output may have a red x icon and possibly red text with a light pink background.

    - console.clear() to clear console

POP UP FUNCTIONS

    - classalert()
    - confirm()
    - prompt ()

ALERTS

    - alert() takes in a variable or value and will output it to the user in a pop-up box.

    - Function’s purpose – displays a value or object to the user in a pop-up box
    - Input – value or object to display to the user in a pop-up message
    - Output – nothing
    Ex. alert("This is a message.");

Confirmation
    
    - The confirm() function takes in a variable or value and will output it to the user in a pop-up box that typically has an OK button and a Cancel button. The confirm() function returns a boolean value – true (if the user clicks the OK button) and false (if the user clicks the Cancel button).

    - 
    Function’s purpose – obtain the user’s confirmation
    Input – value or object to display to the user in a pop-up message with OK and Cancel buttons
    Output – boolean value – true if OK, false if Cancel
    - Ex: confirm("Do you like cake?");

Prompt for information

    - The prompt() function takes in a variable or value and will output it to the user in a pop-up box that typically has a textbox, an OK button, and a Cancel button. The prompt() function returns the value in the textbox (if the user clicks the OK button) or null (if the user clicks the Cancel button).

    - Function’s purpose – obtain information from the user
    - Input – value or object to display to the user in a pop-up message with a textbox and OK and Cancel buttons
    - Output – string value from the textbox (if the user clicks OK) or null (if the user clicks Cancel)
    Ex. prompt('What is your favorite band?');
*/

/* Putting The pop-ups together */

    // Check to see if the user likes cake

/*
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}
*/

/* 
Additional Functions

    - Math object has a lot of math-related functions – which are helpful if you find yourself doing mathematical calculations such as square root, exponents, and rounding.

    - substrings() - Strings have a variety of functions to make it easier to break strings apart, put strings together, and even see if a character or a string is within another string.
*/

/*
Creating a function
Basic Function:

function sayHello() {
    alert('hi');
}

var myName ="Dillon"
function sayHello(myName) {
    alert('Hello, ' + myName);
}

sayHello('Dillon')
*/

/*
Arguments and Parameters

    - The values that you pass into a function are called arguments.
    - The parameters are the variables in parentheses when the function is declared
    Ex:

    function sayHello(myName) {
    alert('Hello, ' + myName);
    }

    sayHello('Mr. Grinch');
------------------------------------

    function sayHello(myName) {
    if (myName == "Mr. Grinch") {
        alert("You're a mean one, " + myName);
    } else {
        alert('Hello, ' + myName);
        }
    }
    sayHello('Mr. Grinch'); 
    ----------------------------------
    User Input their name:
    sayHello(prompt("What's your name?"));