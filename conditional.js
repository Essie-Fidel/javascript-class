let x = Number(prompt("Enter a number"))
if (x % 2 == 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}
//write a simple if statement to check eligibility of a voter:assume a voter must be atleast 18yrs old
let Age = Number(prompt("Enter your Age"))
// if (Age >= 18) {
//     console.log("Qualifies to be a voter")
// } else {
//     console.log("Too young to be a voter")
// }
let eligibility = Age >= 18 ? "eligible to be a voter" : "not eligible to be a voter"
console.log(eligibility)
//Multiple conditions
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
//write a program that determines ticket prices based o age:
//under 12=>500/=,under 18=>650/=,adults=>800/=,0ver 60yrs=>400/=
let age = Number(prompt("enter age"))
if (age < 12) {
    console.log("Price is 500/=")
} else if (age < 18) {
    console.log("Price is 650/=")
} else if (age >= 18) {
    console.log("Price is 800/=")
} else if (age > 60) {
    console.log("Price is 400/=")
} else {
    console.log("invalid input")
}
//write a program that checks whether the lenghth of a username is atleast 8 characters long
//if length<8,output "too short" otherwise output"correct format"
let username = prompt("Enter username")
if (username.length < 8) {
    console.log("too short")
} else {
    console.log("correct format")
}
//terminary operator :=else
let y = Number(prompt("enter a value"))
let even = y % 2 == 0 ? "Even" : "Odd"
console.log(even)