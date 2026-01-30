// Q1: Displaying a popup alert using a numeric variable
var age = 18;
alert("I am " + age + " years old");


// Q2: Tracking visits and printing the value directly onto the HTML page
var visits = 13; 
document.write("<p>You have visited this site " + visits + " times</p>");


// Q3: Storing a year and displaying it as a message on the browser
var birthYear = 2008;  
document.write("<p>My birth year is " + birthYear + "</p>");


// Q4: Concatenating (joining) multiple variables to create an order summary
var visitorName = "Hooriya Khan"; 
var product = "shoes";     
var quantity = 2;             

// The <b> tags are used to make specific variable values bold
document.write(
    "<b>" + visitorName + "</b> ordered <b>" + quantity + 
    "</b> " + product + "(s) on XYZ Clothing store"
);