// function name () {
//     console.log("S");
//     console.log("A");
//     console.log("L");
//     console.log("O");
//     console.log("N");
//     console.log("I");
// }
// name();


// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers();           // NaN
// addTwoNumbers(2, 3);   // 5
// addTwoNumbers(2, "3");  // 23
// addTwoNumbers(2, null);  // 2
// addTwoNumbers(2, undefined);   // NaN



// function addTwoNumbers(a, b){
// let sum = a+b;
// console.log("Saloni");    // "Saloni" will be printed
// return sum; 
// }
// // console.log(addTwoNumbers(2,3));  // 5
// const sum = addTwoNumbers(2,3);
// console.log(sum);    // 5


// function loginUser (userName){
//     return userName;
// }
// console.log(loginUser("Saloni"));    // Saloni


// function loginUser (userName){
//     return `${userName} just logged in`;
// }
// console.log(loginUser("Saloni"));    // Saloni just logged in



// function price (...num){       // The rest parameter bundles all the extra parameters into a single array.
//     return num;
// }
// console.log(price(100, 200));   // [100, 200]
// console.log(price(100, 200, 300, 400));  // [100, 200, 300, 400]


// function price (val1, val2, ...num){       // The rest parameter bundles all the extra parameters into a single array.
//     return num;
// }
// console.log(price(100, 200));    // [] 
// console.log(price(100, 200, 300, 400));  // [300, 400]


// const user = {
//     userName: "Sam",
//     userPrice: 1000,
// }
// function handleObject (anyObject){
//     console.log(`userName is ${anyObject.userName} and price is ${anyObject.userPrice}`);
// }
// handleObject(user);


const user = {
    userName: "Sam",
    userPrice: 1000,
}
const myArray = [100, 200, 300]
function secondArray(getArray) {
    return myArray [1]
}
console.log(secondArray(myArray));    //  300