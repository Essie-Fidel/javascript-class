let person = {
    name: "John Doe",
    age: 29,
    address: "124 kimathi st.",
    "is employed": true
}
console.log(person)
//(.)dot natotation
console.log(person.name)
console.log(person["is employed"])
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
//changing values
person.age = 21
console.log(person.age)