// const mySymbol = Symbol('mySymbol');
// const jsUser = {
//     name: "Saloni",
//     "fullName": "Saloni Goyal",
//    [mySymbol]: "My Symbol Value",
//     age: 19,
//     location: "Jaipur",
//     email: "abc@gmail.com",
//     isLoggedIn: true,
//     lastLoggedInDays: ['Monday', 'Tuesday', 'Wednesday'],
// }

// console.log(jsUser.name); // Saloni - Accessing the name property of the jsUser object
// console.log(jsUser['name']); // Saloni - Accessing the name property using bracket notation
// console.log(jsUser['fullName']); // Saloni Goyal - Accessing the fullName property using bracket notation
// console.log(jsUser.fullName); // Saloni Goyal - Accessing the fullName property using dot notation
// console.log(jsUser[mySymbol]); // My Symbol Value - Accessing the property using the symbol key
// console.log(jsUser.mySymbol); // undefined - Accessing the property using the symbol variable directly will not work
// console.log(jsUser['mySymbol']); // undefined - Accessing the property using a string key will not work

// jsUser.email = "abc@chatgpt.com"; // Updating the email property of the jsUser object
// Object.freeze(jsUser); // Freezing the jsUser object to prevent further modifications
// jsUser.email = "abc@microsoft.com"; // Attempting to update the email property after freezing will not work
// console.log(jsUser.email);  // abc@chatgpt.com
// console.log(jsUser);


// jsUser.greeting = function() {
//     console.log("Hello JS User");
// }
// console.log(jsUser.greeting()); // Hello JS User - Calling the greeting method of the jsUser object

// jsUser.greetingOne = function() {
//     console.log(`Hello JS User, My Name is ${this.name}`);
// }
// console.log(jsUser.greetingOne()); // Hello JS User, My Name is Saloni - Calling the greetingOne method of the jsUser object



// const instaUser = new Object(); // Creating a new object using the Object constructor
const instaUser = {};
instaUser.name = "John",
instaUser.age = 25,
instaUser.id = "John123",
instaUser.isLoggedIn = true,
console.log(instaUser)    // { name: 'John', age: 25, id: 'John123', isLoggedIn: true }
console.log(Object.keys(instaUser)); // [ 'name', 'age', 'id', 'isLoggedIn' ] 
console.log(Object.values(instaUser)); // [ 'John', 25, 'John123', true ] 
console.log(Object.entries(instaUser)); // [ [ 'name', 'John' ], [ 'age', 25 ], [ 'id', 'John123' ], [ 'isLoggedIn', true ] ]
console.log(instaUser.hasOwnProperty('name')); // true - Checking if the 'name' property exists in the instaUser object
console.log(instaUser.hasOwnProperty('fullName')); // false - Checking if the 'fullName' property exists in the instaUser object


const newUser = {
   fullName : {
    firstName: "Jack",
    lastNane: "Smith",
   },
   age: 30,
   id: "Jack123",
   isLoggedIn: false,
}
console.log(newUser) // { fullName: { firstName: 'Jack', lastNane: 'Smith' }, age: 30, id: 'Jack123', isLoggedIn: false

console.log(newUser.fullName.firstName); // Jack 


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "e", 6: "f"};
// const obj4 = Object.assign({}, obj1, obj2, obj3); // Merging multiple objects into one
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'e', '6': 'f' }

const obj4 = {...obj1, ...obj2, ...obj3}; // Merging multiple objects into one using spread operator
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'e', '6': 'f' }

