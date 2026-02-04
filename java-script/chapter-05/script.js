
// Q1: Add two numbers
document.write("<h2>sums</h2>");
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Q2: Subtraction, multiplication, division, modulus
document.write("<h2>Subtraction, multiplication, division, modulus</h2>");

document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");


// Q3: Variable operations
document.write("<h2>operations</h2>");

var value;
document.write("value after declaration" + value + "<br>");
value = 5;
document.write("initial value :" + value + "<br>");
value++;
document.write("after increment:" + value + "<br>");
value += 7;
document.write("after addition:" + value + "<br>");
value--;
document.write("After decrement: " + value + "<br>");
document.write("Remainder: " + (value % 3) + "<br>");

// Q4: Movie tickets
document.write("<h2>tickets</h2>");
var ticketPrice = 600;
var totalTickets = 5;
document.write("total coast is:" + (ticketPrice * totalTickets) + "pkr <br> <br>");


// Q5: Multiplication table
var number = 5;

document.write("Multiplication table of " + number + ":");
document.write("<h1>TABLE</h1>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br><br><br>");


document.write("<h2>Celsius,Fahrenheit</h2>");
// a. Store a Celsius temperature
var celsius = 25;

// b. Convert Celsius to Fahrenheit
var fahrenheit = (celsius * 9 / 5) + 32;

// Show result
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// c. Store a Fahrenheit temperature
var fahrenheit2 = 70;

// d. Convert Fahrenheit to Celsius
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

// Show result
document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br><br>");


// Q7: Shopping cart
var priceItem1 = 500;  
var priceItem2 = 700;  
var quantityItem1 = 2;  
var quantityItem2 = 3;  
var shippingCharges = 100; 

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>HOOR Clothing Store</h1>");
document.write("Price of item1: " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total cost of your order is: " + totalCost + " PKR<br>");


// Q8: Percentage
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h2>percentge</h2>");
document.write("Percentage is: " + percentage + "%<br><br>");


// Q9: Currency conversion
var dollars = 10;
var riyals = 25;
document.write("<h2>Currency in PKR</h2>");
var pkr = (dollars * 104.8) + (riyals * 28);
document.write("Total in PKR is: " + pkr + "<br><br>");

// Q10: Arithmetic operations in one expression
var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("<h2>Arithmetic Result</h2>");
document.write("Result after operations is: " + result + "<br><br>");


// Q11: Age Calculator
var currentYear = 2026;
var birthYear = 2008;

var age1 = currentYear - birthYear;     /
var age2 = age1 - 1;                   

document.write("<h1>Age Calculator</h1>");
document.write("current year." + currentYear + "<br><br>");
document.write("birth year." + birthYear + "<br><br>");
document.write("your age is." + age2 + "<br><br>");


// Q12: The Geometrizer
var radius = 5;           
var pi = 3.142;          

var circumference = 2 * pi * radius;   
var area = pi * radius * radius;     

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);


// Q13: Lifetime Supply Calculator
var favoriteSnack = "Chocolate";
var currentAge = 18;
var maxAge = 80;
var perDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * perDay;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".<br>");
