var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseFloat(prompt("What is your favorite number?"));
var number2 = parseFloat(prompt("What number do you hate the most?"));
var result = add(number1, number2);
alert("The numbers added together are: " + result);

var subtract = function(number1, number2) {
  return number1 - number2;
};
// var number1 = parseFloat(prompt("Enter the first number please:"));
// var number2 = parseFloat(prompt("Enter the second number please:"));
var result = subtract(number1, number2);
alert("The difference between the numbers is: " + result);

var multiply = function(number1, number2) {
  return number1 * number2;
};
// var number1 = parseFloat(prompt("Enter the first number please:"));
// var number2 = parseFloat(prompt("Enter the second number please:"));
var result = multiply(number1, number2);
alert("The numbers multiplied together are: " + result);

var divide = function(number1, number2) {
  return number1 / number2;
};
// var number1 = parseFloat(prompt("Enter the first number please:"));
// var number2 = parseFloat(prompt("Enter the second number please:"));
var result = multiply(number1, number2);
alert("The division of the numbers results in: " + result);








/*
Celsius/Fahrenheit Conversion CALCULATOR
********************************
var celsius = parseFloat(prompt("What is the temperature in Celsius?"));
var fahrenheit =parseFloat(prompt("What is the temperature in Fahrenheit?"));

var conversionFC = function(fahrenheitInput) {
return (fahrenheitInput -32) *5 /9;
}

var conversionCF = function(celsiusInput) {
return celsiusInput*9 /5 +32;
}

var answer = conversionFC(fahrenheit);
alert("The conversion from Fahrenheit to Celsius is: " + answer);

var answer2 = conversionCF(celsius);
alert("The conversion from Celsius to Fahrenheit is: " + answer2);
********************************







BMI CALCULATOR
********************************
var height = parseFloat(prompt("What is your height in inches?"));
var weight = parseFloat(prompt("What is your weight in pounds?"));

var bmi = function(height, weight) {
return weight*0.45 / (height*0.025)^(0.5);
};
var output = bmi(height, weight);
alert("Your BMI is: " + output);
********************************



var name = prompt("Please enter your name:");
var age = prompt("Please enter your age:");
var food = prompt("Please enter your favorite food:");

var master = function(name1, age1, food1) {
alert("Hello, " + name1 + ". You are " + age1 + " years old!  Your favorite food is " + food1);
};

master(name,age,food);



var divide = function(number1, number2) {
return number1 / number2;
};

alert(divide(5,5));


var remainder = function(number1,number2) {
return number1%number2;
};

alert(remainder(4,2));

var subtract = function(number1, number2) {
return number1 - number2;
};
alert(subtract(10,5));


var multiply = function(number1, number2) {
return number1 * number2;
};

alert(multiply(5,5));

var threeTimes = function(number1, number2, number3) {
return number1 * number2 * number3;
};



var num1 = prompt("Please enter number 1:");
var num2 = prompt("Please enter number 2:");
var num3 = prompt("Please enter number 3:");

alert(threeTimes(num1,num2,num3));*/
