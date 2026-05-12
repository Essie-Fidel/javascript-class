//Create a variable and console log whether a number is odd or even
let a = Number(prompt("enter a value"))
let even = a % 2 == 0 ? "Even" : "Odd"
console.log(even)
// Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
let num1 = Number(prompt("enter num1"))
let num2 = Number(prompt("enter num2"))
let num3 = Number(prompt("enter num3"))
if ((num1 > num2) && (num1 > num3)) {
    console.log("num1 is the largest")
} else if ((num2 > num1) && (num2 > num3)) {
    console.log("num2 is the largest")
} else {
    console.log("num3 is the largest")
}
// Create a variable called year and enter the a random year.
//  Check if the year is a leap year or not.
//  A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.
let year = Number(prompt("eenter year"))
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("leap year")
} else {
    console.log("not a leap year")
}

// Take as input from a user the temperature
//  if the temperature is above 30°C display “The temperature is too high”,
// if the temperature   is above 15 display “Normal temperature”
//  otherwise display “Cold temperature”
let temp = Number(prompt("enter temparature"))
if (temp > 30) {
    console.log("The temperature is too high")
} else if (temp > 15) {
    console.log("Normal temparature")
} else {
    console.log("Cold temparature")
}
// Write a js program that checks if a variable x is between 10 and 20 (inclusive) 
// and if another variable y is greater than 100. If both conditions are true, 
// display"Conditions met", otherwise display"Conditions not met"
let x = Number(prompt("enter value x"))
let y = Number(prompt("enter value y"))
if ((x >= 10 && x <= 20) && (y > 100)) {
    console.log("conditions met")
} else {
    console.log("conditions not met")
}

// Write a js program that checks if a variable password is equal to the string 
// "secret123". If it is, display "Access   granted", otherwise display"Access denied"
let pass = "secret123"
let password = prompt("enter password")
if (password == pass) {
    console.log("access granted")
} else {
    console.log("access denied")
}
// Write a js program that checks if a variable student_score is greater than 90.
//  If true, check if the attendance is greater than 80. If both conditions are true, 
// display"Excellent student", otherwise display "Good score,
//  but attendance needs improvement"
let student_score = Number(prompt("Enter score"));
let attendance = Number(prompt("Enter attendance"));

if (student_score > 90 && attendance > 80) {

    console.log("Excellent student");

} else if (student_score > 90 && attendance <= 80) {

    console.log("Good score, but attendance needs improvement");

} else if (student_score <= 90 && attendance >= 80) {

    console.log("Good attendance but score needs improvement");

} else {

    console.log("Both score and attendance need improvement");

}
//A student's final grade is determied by their exam score a nume btwn 0-100
//using the rules below:
//if the score >=70 , the grade is A
//if the score is 60-69 ,the grade is B
//if the score is 50-59, the grade is C
//if the score is 40-49,the Grade is D
//if the score<40 , the grade is F
//write a javascript progrm that stores student's score in a variable;use the if,if else and else statements to determine the score
//print thegrade to the console
let score = Number(prompt("enter your score"))
if ((score >= 70) && (score <= 100)) {
    console.log("the grade is A")
} else if ((score >= 60) && (score <= 69)) {
    console.log("the grade is B")
} else if ((score >= 50) && (score <= 59)) {
    console.log("the grade is C")
} else if ((score >= 40) && (score <= 49)) {
    console.log("the grade is D")
} else if (score < 49) {
    console.log("the grade is F")
} else {
    console.log("invalid input")
}

