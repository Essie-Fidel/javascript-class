// create a new file called objectTask and attempt the below questions:
// my_arr= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
my_arr = [23, "Jane", 560, ["lesson", "Maths", { "currency": "KES" }], 987, 76, "John"]
// Display:
// 1. KES
console.log(my_arr[3][2].currency)
// 2. 560
console.log(my_arr[2])
// 3. Maths
console.log(my_arr[3][1])
// 4. In the object with the key currency, add another key “amount” with value 90
my_arr[3][2].amount = 90
console.log(my_arr)
// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
//      Hint: arrays can be reversed using reverse() functions
let num = String(my_arr[4]).split('')
console.log(num)
num.reverse()
console.log(num)
my_arr[4] = Number(num.join(''))
console.log(my_arr)
// 6. Change the name “John” to “Jane” . 
my_arr[6] = "Jane";

console.log(my_arr);