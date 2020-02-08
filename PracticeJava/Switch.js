/* 
A switch statement is an alternative to writing a whole bunch of if…else statements. Let's look at how the above example is written as a switch statement. 
*/
switch (direction) {
    case "STOP":
        console.log("STOP!");
        alert("STOP!");
        break;
    case "SLOW":
        console.log("SLOW DOWN!");
        alert("SLOW DOWN!");
        break;
    default:
        console.log("GO!");
        alert("GO!");
}