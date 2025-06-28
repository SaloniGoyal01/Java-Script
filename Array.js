const arr = [1,2,3,4,5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.length); // 5
console.log(arr[0]); // 1

const myHeros = ["Saktiman", "Suerman"];
console.log(myHeros); // ["Saktiman", "Suerman"]
console.log(myHeros.length); // 2
console.log(myHeros[0]); // "Saktiman"

const myArr1 = new Array(10,20,30,40,50);
console.log(myArr1); // [10, 20, 30, 40, 50]
console.log(myArr1[2]); // 30



// // // Array Methods

// myArr1.push(60); // Adds 60 to the end of the array
// myArr1.push(70); // Adds 70 to the end of the array
// console.log(myArr1); // [10, 20, 30, 40, 50, 60, 70]
// myArr1.pop(); // Removes the last element (70) from the array
// console.log(myArr1); // [10, 20, 30, 40, 50, 60]
// myArr1.pop(); // Removes the last element (60) from the array
// console.log(myArr1); // [10, 20, 30, 40, 50]

// myArr1.unshift(90); // Adds 90 to the beginning of the array
// console.log(myArr1); // [90, 10, 20, 30, 40, 50, 60]
// myArr1.shift(); // Removes the first element (90) from the array
// console.log(myArr1); // [10, 20, 30, 40, 50, 60]

// console.log(myArr1.includes(30)); // true - Checks if 30 is present in the array
// console.log(myArr1.indexOf(300)); // -1 - Returns -1 if 300 is not found in the array
// console.log(myArr1.indexOf(40)); // 3 - Returns the index of 40 in the array
// console.log(myArr1.indexOf(10)); // 0 - Returns the index of 10 in the array
// console.log(myArr1.indexOf(400)); // -1 - Returns -1 if 400 is not found in the array



// const newArr = myArr1.join();
// console.log(myArr1); // [10, 20, 30, 40, 50, 60]
// console.log(newArr); // "10,20,30,40,50,60" - Converts the array to a string with comma-separated values
// console.log(typeof newArr);  // string - The type of newArr is string



// console.log("A", myArr1); // "A" [10, 20, 30, 40, 50]
// const myArr2 = myArr1.slice(1,3); // Creates a new array with elements from index 1 to 2 (not including index 3)
// console.log("B", myArr2); // "B" [20, 30]
// console.log(myArr1); // [10, 20, 30, 40, 50] - myArr1 remains unchanged
// const myArr3 = myArr1.splice(1,3); // Modifies myArr1 by removing elements from index 1 to 2 (not including index 3)   OR // // Creates a new array with elements from index 1 to 3
// console.log("C", myArr3); // "C" [20, 30, 40] - The removed elements are stored in myArr3
// console.log(myArr1); // [10, 50] - myArr1 is modified and now contains only the remaining elements



// const marvelHeros = ["Thor", "Iron", "Hulk", "Spiderman", "Captain America"];
// const dcHeros = ["Batman", "Superman", "flash", "Aquaman", "Wonder"];
// marvelHeros.push(dcHeros); // Adds the entire dcHeros array as a single element to marvelHeros
// console.log(marvelHeros); // ["Thor", "Iron", "Hulk", "Spiderman", "Captain America", ["Batman", "Superman", "flash", "Aquaman", "Wonder"]]
// console.log(marvelHeros.length); // 6 - The length of marvelHeros is now 6 because dcHeros is added as a single element
// console.log(marvelHeros[4]);   // Captain America
// console.log(marvelHeros[5]);   // ["Batman", "Superman", "flash", "Aquaman", "Wonder"] - Accessing the dcHeros array within marvelHeros
// console.log(marvelHeros[5][0]); // Batman - Accessing the first element of the dcHeros array within marvelHeros


// const allHeros = marvelHeros.concat(dcHeros);  // Combines both arrays into a new array
// console.log(allHeros); // ["Thor", "Iron", "Hulk", "Spiderman", "Captain America", "Batman", "Superman", "flash", "Aquaman", "Wonder"]


// const allHeros = [...marvelHeros, ...dcHeros]; // Combines both arrays into a new array using spread operator
// console.log(allHeros); // ["Thor", "Iron", "Hulk", "Spiderman", "Captain America", "Batman", "Superman", "flash", "Aquaman", "Wonder"]


const anotherArr = [1,2,3, [4,5], [6,[7,8],9]];
console.log(anotherArr); // [1, 2, 3, [4, 5], [6, [7, 8], 9]]
console.log(anotherArr.length); // 5 - The length of anotherArr is 5 because it counts the nested arrays as single elements
const realanotherArr = anotherArr.flat(Infinity); // Flattens the array to a single level
console.log(realanotherArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9] - All nested arrays are flattened
console.log(realanotherArr.length); // 9 - The length of the flattened array is now 9



console.log(Array.isArray("Saloni")); // false - "Saloni" is not an array
console.log(Array.isArray([1,2,3])); // true - [1,2,3] is an array
console.log(Array.isArray([])); // true - An empty array is still an array
console.log(Array.isArray({})); // false - An object is not an array
console.log(Array.from("Saloni")); // ['S', 'a', 'l', 'o', 'n', 'i'] - Converts a string to an array of characters
console.log(Array.from({name: "Saloni"}));   // []  



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] - Creates a new array with the specified elements