//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
//display values 300-200
for (let i = 300; i >= 200; i--) {
    console.log(i)
}
//looping through arrays
let fruits = ['mango', 'apple', 'orange', 'grapes']
// for (let i = 0; i <= 3; i++) {//i represents index
//     console.log(fruits[i])
// }
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i])
}
//while loop
//can create a virus and flood your ram making it shut down
let x = 1
while (x <= 10) {
    console.log(x)
    x++//if you forget the loops runs infinitely*never stops*
}
//do while//not very popular
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);