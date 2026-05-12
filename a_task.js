// //Assignment 1: Create an Array
// Create an array named colors with the following elements: 'red', 'green', 'blue'.
colors = ['red', 'green', 'blue']
console.log(colors)
// Assignment 2: Access and Modify Array Elements
// Given the array colors, access the second element and change it to 'pink'. 
colors[2] = 'pink'
// hn Then, display the modified array.
console.log(colors)
// Assignment 3: Determine the Length of an Array
// Given the array colors, determine its length and store it in a variable 
let lengthofcolors = colors.length
console.log(lengthofcolors)
// lengthOfColors. Then, display lengthOfColors.
// Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the 
// array. Then, display the modified array.
colors.pop()
console.log(colors)
// Assignment 1: Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combinedArray using
//  the .concat() method. Then, remove the first element from combinedArray using the
//  .shift() method. Finally, display the modified combinedArray.
arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9]
let combinedarray = arr1.concat(arr2)
console.log(combinedarray)
combinedarray.shift()
console.log(combinedarray)
// Assignment 2: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to 
// index 4 using the .slice() method. Then, modify the extractedArray by replacing its 
// elements with 'x', 'y', and 'z' using the .splice() method. Finally, display both 
// the sourceArray and the modified extractedArray.
sourearray = ['tokyo', 'beijing', 'seoul', 'delhi', 'milan', 'olkahoma', 'westchester']
let extractedarray = sourearray.slice(2, 5)
console.log(extractedarray)
extractedarray.splice(0, 3, 'x', 'y', 'z')
console.log(sourearray)
console.log(extractedarray)



