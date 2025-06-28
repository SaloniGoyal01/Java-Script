// let myName = "Saloni";
// let myAnotherName = myName
// console.log(myAnotherName);



// let myName = "Saloni";
// let myAnotherName = "Goyal";
// myAnotherName = myName;
// console.log(myName);            // Saloni
// console.log(myAnotherName);     // Saloni


// let myName = "Saloni";
// let myAnotherName = myName;
// myAnotherName = "Goyal";
// console.log(myName);            // Saloni   
// console.log(myAnotherName);     // Goyal

let userOne = {
    email : "abc@gmail.com",
    password : "12345"
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);        
console.log(userTwo.email);
