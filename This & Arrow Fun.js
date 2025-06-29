// const user = {
//     userName : "Saloni",
//     userWebsite: "YouTube",
//     welcomeMessage : function(){
//         console.log(`${this.userName}, Welcome on My Website`);
//         // console.log(this);
//     }
// }
// user.welcomeMessage();     // Saloni, Welcome on My Website
// user.userName = "Seema";
// user.welcomeMessage();    // Seema, Welcome on My Website
// console.log(this);        // {}


// const value = function (){
//     let userName = "Saloni";
//     console.log(this);
// }
// value()

// const value = function (){
//     let userName = "Saloni";
//     console.log(this.userName);     // undefined
// }
// value()


// function One (){
//     console.log(this);
// }
// One()


// function one (){

// }
// console.log(this);
// one()



// const one = function(){
//     userName : "Saloni"
//     console.log(this.userName);     // undefined
// }
// one()


//                // ARROW FUNCTION
// const one = () => {
//     userName : "Saloni"
//     console.log(this.userName);     // undefined
// }
// one()



// const one = () => {
//     userName : "Saloni"
//     console.log(this);     // {}
// }
// one()

// const one = () => {
//     userName : "Saloni"
//     console.log(this.userName);      // undefined
// }
// one()

// const one = () => {
//     userName : "Saloni"
// }
// console.log(this.userName);        // undefined
// one()



// const addTwoNumber = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwoNumber(2,3));    // 5
          
                        //   OR

// const addTwoNumber = (num1, num2) => num1 + num2       // implicit 
// console.log(addTwoNumber(2,3));        // 5

// const addTwoNumber = (num1, num2) => (num1 + num2)
// console.log(addTwoNumber(2,3));     // 5