/* Expressions and Statements

    Expressions are pieces of code that return values - which may be made up of a single value or a combination of operands and operators, functions, and variables.  Expressions can be as simple as a single value or as complex as doing math with values that are returned from function calls.

    Statements are pieces of code that perform actions or produce behaviors - such as declaring a variable, changing a variable's value, or displaying an alert message.
    All statements must end with a semi-colon (;) in JavaScript.
*/

/* Variables 
    use var to declare variable
    Ex.
    var foo;
    var bar;

    Assigning values to variables:
    var foo = 10 * 2;   //foo is now set to the value "20"
    var bar = true;   //bar is now set to the value "true"

    Extra Ex. 
    
    var foo = false;
 
    foo = 12;        //correct way to reassign a value to a variable
 
    var foo = true;  //Duplicate declaration, don’t do this!!!
 
    var var = 5;  //this will cause an error, var is a reserved keyword in JavaScrip
*/

/* JavaScript Variable Naming Conventions
    
    JavaScript’s identifiers – names – follow a certain set of rules. Here are some things to know about naming your variables:

    - Identifiers can start with a letter, an underscore (_), or a dollar sign ($).
    - Other characters that can be used after the first character include additional letters, numbers, underscores, or dollar signs.
    - Hyphens (-) cannot be used in variable names; they are specifically reserved as the subtraction operator.
    - JavaScript is case-sensitive: mathFacts and MathFacts are two different names.
    - While you can use underscores to represent spaces in variable names, you will also see camelCasing used. This convention states that the first character is lowercase and then the first character of each noun in the name after the first one is capitalized. Examples of this include mathFacts, dayName, documentObject, and totalScore.
*/

/* Unary Operators in Expressions

    JavaScript has two types of operators, unary and binary. Unary operators perform operations on a single value. Binary operators perform operations on two values, like subtracting one number from another number. Unary operators are special in that they work on variables, not values.

    For example, the unary increment operator (++) will increase a value by 1.  The unary decrement operator (--) will decrease a value by 1.

    var x = 1;
    x = x + 1; // x = 2
 
    var y = 1;
    y++; // y = 2
 
    var a = 2;
    a = a – 1; // a = 1
 
    var b = 2;
    b--; // b = 1
*/

/* A Different Kind of Statement – Comments
    Comment - like html
    End of line comment //here's end of line comment 
*/