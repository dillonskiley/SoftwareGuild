/* Value 

Whole numbers are known as integers
Fractional numbers with decimals are known as floats.

12  //integer number
10.90  //float number

    Add (+)
    Subtract (-)
    Multiply (*)
    Divide (/)
    Modulo or Remainder (%)
 
Ex. 
10 + 2 * 3
(10 + 2) * 3
*/

/* Boolean Values
Boolean values have only two possible values, true or false
 */

 /* String Values and String Operators
 
 Double or single quotes work

"This is a valid string value."
 
'This is not a valid string value."
 
"Neither is this'


Strings with quotes

'This is a string value with "double quotes" inside of it.'
 
"This is a string value with 'single quotes' inside of it."


How to break a sentence

console.log("This text will be on line 1. \n This text will be on line 2.");


String values can use the + operator to combine multiple String values into one String value. This is known as concatenation.

Ex.
"Ja" + "va" + "Scri" + "pt"
 */

 /* Undefined and Null Values
 The last two value types are undefined and null. Undefined means that you have created a variable but not assigned it a value just yet. For null, you've created a variable and its value is null. 
 */

 /* Comparison Operators

 Comparison operators are used to compare two values and return a result of true or false. Let's look at the comparison operators that are available.

    Less than (<)
    Greater than (>)
    Less than or equal to (<=)
    Greater than or equal to (>=)
    Equal to (==)
    Strictly equal to (===)
    Not equal to (!=)
    Not strictly equal to (!===)

The first five in the list should be self-explanatory. Strictly equal to (===) was added in a later version of JavaScript to fix some of the shortcomings of (==). There are some cases where (==) will return false when you are expecting it to return true or vice versa. Strictly equal to (===) is a lot more strict and should be preferred over using (==).

Not equal to (!=) and not strictly equal to (!==) are used for checking if a value is not equal to another value. Not strictly equal to is preferred over not equal to for the same reason strictly equal to is preferred over equal to.

All comparisons produce Boolean values. Let's see some examples:
3 == 3 // true
3 == "3" // true
3 === 3  //true
3 === "3"  //false
1 > 2   //false
 
Notice that == and === return different values. The == operator checks the values of the operands on either side of the operator. If the values are of different types, it attempts to convert them before comparing, and if they match, the expression returns true. The === operator checks the values and types of the operands on either side of the operator. If the operands have the same value but different types, then the === will return false.
 */

 /* Logical Operators
 
 JavaScript has three logical operators.

    And (&&)
    Or (||)
    Not (!)

The And operator (&&) is a binary operator that will take two Boolean values (true or false). The only way to return a "true" is if both values are true:

true && true   //true
false && true  //false

The Or operator (||) will produce a true value if either of the values is true.

true || false   //true

false || false  //false

The Not operator (!) will flip a boolean value that is true to false and flip a false value to true.

!true   //false

!false  //true

 */
