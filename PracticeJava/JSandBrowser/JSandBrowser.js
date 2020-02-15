/*
JavaScript and the Browser
*/
/*
    Once an HTML page is loaded in the browser, it is considered a document object. The document object model (DOM) is a platform-agnostic convention for representing markup objects written in HTML

    
    The document object may be written as window.document or simply document.

    Here are some common ways to search with JavaScript and the DOM:

    - document.getElementById("idName") – find the DOM element with the id of idName
    - document.getElementsByName("elementName") – find the DOM element(s) with the name of elementName
    - document.getElementsByTagName("tagName") – find the DOM element(s) of a particular HTML tag
    - document.getElementsByClassName("cssClassName") – find the DOM element(s) with a class attribute of cssClassName
*/

/*
DOM Collections 
The document object also has properties that give us easy access to HTML element collections:

    anchors – hyperlinks
    cookie
    embeds – embedded media
    forms
    images
    links – all hyperlinks and <area> objects with href attributes
    scripts

    These collections can be accessed via document.propertyname. For example, let's say we wanted to hide all links. We could create a function to do that using the document.links collection, such as the one listed below:
 */
function hideAllLinks() {
    var allLinks = document.links;
    for (var loopCounter = 0;
        loopCounter < allLinks.length; loopCounter++) {
        allLinks[loopCounter].style.display = "none";
    }
}

/*
Events

    An event is an activity that can be used to trigger a call to a JavaScript function when the activity happens. There are many events that take place in the web browser. Some types of JavaScript events are:

    - Document events – for the DOM objects
    - Mouse events – for various mouse states
    - Keyboard events – for various keyboard states – such as key presses, key releases
    - Form events – for handling <form> actions and also on form controls
    - Window events – for the browser window

    commonly used events: onload and onclick
*/

/*
The onload Event

    Typically applied to the <body> tag, the onload event happens once an object is loaded. While it is commonly applied to the <body> tag, it can be applied to other tags if needed.

    Here is a sample of the onload event. Notice that onload appears as an attribute of the <body> tag. Also notice that it is calling JavaScript's alert() function:
*/

<!DOCTYPE html>
 
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Simple onload Example</title>
</head>
<body onload="alert('Page is loaded');">
    <div>
        <h1>Page Loaded</h1>
        <hr />
        <div>You should be able to see this under the alert.</div>
    </div>
</body>
</html>

/*
    We can create our own JavaScript function and call it as part of the onload event. Here is a sample of the onload event calling a function we created:
*/

<!DOCTYPE html>
 
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Simple onload Example with Function</title>
    <script type="text/javascript">
        function greetTheUser() {
            var userName = prompt("What is your name?");
            document.getElementById("userName").innerText = userName;
        }
    </script>
</head>
<body onload="greetTheUser();">
    <div>
        <h1>Hi, <span id="userName"></span>!</h1>
    </div>
</body>
</html>

/*
The onclick Event
*/
