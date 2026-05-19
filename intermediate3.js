// 11.Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime
// nb:don't use the inbuilt datetime library


let birthYear = Number(prompt("Enter birth year"))
let birthMonth = Number(prompt("Enter birth month"))
let birthDay = Number(prompt("Enter birth day"))

let currentYear = Number(prompt("Enter current year"))
let currentMonth = Number(prompt("Enter current month"))
let currentDay = Number(prompt("Enter current day"))

let years = currentYear - birthYear
let months = currentMonth - birthMonth
let days = currentDay - birthDay

if (days < 0) {
    days += 30
    months -= 1
}

if (months < 0) {
    months += 12
    years -= 1
}

console.log(
    "Age is: " +
    years + " years, " +
    months + " months, " +
    days + " days"
)
// 12.Write a program that prints the largest of 4 inputs taken as input from a user.
let num1 = Number(prompt("Enter first number"))
let num2 = Number(prompt("Enter second number"))
let num3 = Number(prompt("Enter third number"))
let num4 = Number(prompt("Enter fourth number"))

let largest = num1

if (num2 > largest) {
    largest = num2
}

if (num3 > largest) {
    largest = num3
}

if (num4 > largest) {
    largest = num4
}

console.log("Largest number is:", largest)
// 13.Write a program that takes the email and password as input from a user and checks
// if they are equal to “admin@mail.com” and password is “Admin@123” , if so then print
//   “Login is Successful” and if not print “Invalid username or password”. ONLY accept
//  3 tries after which it notifies you that you have been blocked.
let correctEmail = "admin@mail.com"
let correctPassword = "Admin@123"

for (let i = 1; i <= 3; i++) {

    let email = prompt("Enter email")
    let password = prompt("Enter password")

    if (email == correctEmail && password == correctPassword) {

        console.log("Login is Successful")
        break

    } else {

        console.log("Invalid username or password")
    }

    if (i == 3) {
        console.log("You have been blocked")
    }
}
// 14.Write a program that takes input of 2 values and adds them. The program should 
// only accept numbers and floats only or otherwise display an error “invalid character
//  entered” and take the user to re-enter the inputs .
let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

if (!isNaN(num1) && !isNaN(num2)) {

    let sum = Number(num1) + Number(num2)

    console.log("Sum is:", sum)

    break

} else {

    console.log("Invalid character entered")
}

