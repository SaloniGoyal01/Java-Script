// OBJECT ORIENTED PROGRAMMING (OOP)

// const user = {
//     username: 'Saloni',
//     isLoggedIn: true,
//     loginCount: 8,

//     getUserDetails: function(){
//         // console.log('Got user details');        // Got user details
//         // console.log(`username: ${this.username}`);     // username: Saloni
//             console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());



function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // Method
    this.greeting = function(){
        console.log(`Welcom ${this.username}`)
    }
    return this
}

const userOne = new user('saloni', 10, false)
const userTwo = new user('harsh', 11, true)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
