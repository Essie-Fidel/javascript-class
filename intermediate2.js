//6. Write a program that lets the user input a password. Give them only 4 attempts to check
// the passwords entered against “admin@123”. If the password is correct access is granted.
// After you show them a message , the account is blocked.
let correctPassword = "admin@123"

for (let i = 1; i <= 4; i++) {

    let password = prompt("Enter password")

    if (password == correctPassword) {
        console.log("Access granted")
        break
    } else {
        console.log("Wrong password")
    }

    if (i == 4) {
        console.log("Account blocked")
    }
}
//7. Write that prompts the user to input student marks. The input should be between 0 and 
// 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40

//8. Write a program that takes as input the speed of a car e.g 80. If the speed is less 
// than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points
// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more 
// than 12 points, the function should print: “License suspended”.
let speed = Number(prompt("Enter car speed"))

if (speed < 70) {

    console.log("Ok")

} else {

    let points = Math.floor((speed - 70) / 5)

    console.log("Points: " + points)

    if (points > 12) {
        console.log("License suspended")
    }
}
//9. Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....
let rows = Number(prompt("Enter number of rows"))

for (let i = 1; i <= rows; i++) {

    let stars = ""

    for (let j = 1; j <= i; j++) {
        stars += "*"
    }

    console.log(stars)
}
// 10.Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

// prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

// NB: ONCE YOU COPY AND PASTE THE LIST ABOVE,REWRITE THE SINGLE QUOTES AS THE ABOVE LIST WILL GIVE YOU AN ERROR.
let prods = [
    ["omo", "30kshs", "300"],
    ["milk", "50kshs", "200"],
    ["bread", "45kshs", "359"],
    ["coffee", "5kshs", "79"]
]

let totalStock = 0

for (let i = 0; i < prods.length; i++) {

    totalStock += Number(prods[i][2])

}

console.log("Total stock is:", totalStock)