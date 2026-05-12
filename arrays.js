let values = [1, 2, 3, 'Apples', 'Laptops', false]
console.log(values)
console.log(values[4])
values[5] = true
console.log(values)
//array methods
//length method
console.log(values.length)
//.at method
console.log(values.at(5))//zero-based
console.log(values.at(-3))//-ve indexing
//slicing
console.log(values.slice(2, 5))
//adding items to an array
//push=>end of an array
values.push('Samsung', 5, 6, 7)
console.log(values)
//unshift=>start of an array
values.unshift('bananas', 'Tokyo', 'Beach')
console.log(values)
//removal of items in array
//pop=>the end of an array
values.pop()
console.log(values)
//shift=>the start of an array
values.shift()
console.log(values)
//includes=>checks whether the value is contained in array
console.log(values.includes(2))//true
console.log(values.includes(10))//false
//splice=>adds,removes,replaces items from an array
// A. Removing items
let fruit = ["apple", "banana", "orange", "mango"];

fruit.splice(1, 2);

console.log(fruit);
//B. Adding items
let fruits = ["apple", "mango"];

fruits.splice(1, 0, "banana");

console.log(fruits);
//C. Replacing items
let Fruits = ["apple", "banana", "orange"];

Fruits.splice(1, 1, "grapes");

console.log(Fruits);