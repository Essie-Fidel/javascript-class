//1.Write a program that prompts the user to enter the base and height of a triangle 
// and returns its area.
let base = Number(prompt("Enter the base"))
let height = Number(prompt("Enter the height"))

let area = (base * height) / 2

console.log("Area is:", area)
//2. Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
let y = Number(prompt("enter any value"))
if (y % 2 == 0) {
    console.log('even number')
} else {
    console.log('odd number')
}
//3. Write a program which gets a phone number from a form input or terminal.
//  Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
let phone_number = prompt("Enter phone number").trim()

if (phone_number.startsWith("+254")) {

    console.log(phone_number)

} else if (phone_number.startsWith("07")) {

    console.log("+254" + phone_number.slice(1))

} else if (phone_number.startsWith("01")) {

    console.log("+254" + phone_number.slice(1))

} else if (phone_number.startsWith("7")) {

    console.log("+254" + phone_number)

} else if (phone_number.startsWith("1")) {

    console.log("+254" + phone_number)

} else if (phone_number.startsWith("254")) {

    console.log("+" + phone_number)

} else {

    console.log("Invalid input")
}
//4. Write a program which accepts email as form input or from terminal. 
// Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.
let email = prompt('enter email')
if (email.includes('@', '.')) {
    console.log(' email is valid')
} else {
    console.log('invalid email input')
}
//5. Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!
// The goal of this exercise is to think about some internals that programs normally take care of for us. 
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