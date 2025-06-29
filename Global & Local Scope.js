// let a = 10;
// const b = 20;
// var c = 30;
// // console.log(a);     // 10
// // console.log(b);     // 20
// // console.log(c);     // 30
// if(true){
//     let a = 100;     // Block Scoped variable
//     const b = 200;   // Block Scoped constant
//     var c = 300;     // Function Scoped OR Global Scoped Variable

//     console.log(a);    //  100
//     console.log(b);    //  200
//     console.log(c);    //  300
// }
// // console.log(a);     // 10
// // console.log(b);     // 20
// // console.log(c);     // 300    // ❗ This replaces the earlier 'c' because 'var' ignores block scope



                  //  Nested GLOBAL & LOCAL SCOPE 

// function one (){
//     userName =  "Ram";

//     function two (){
//         newUserName = "Shyam";
//         console.log(userName);   // Ram
//         console.log(newUserName);   // Shyam
//     }
//     console.log(userName);   // Ram
    
//     //  console.log(newUserName);   // Error  =>  it's block scoped
//  two()
// }
// one()


// if(true){
//     const firstName = "Saloni"
//     if(firstName == "Saloni"){
//         const lastName = " Goyal"
//         console.log(firstName + lastName);     // Saloni Goyal
//     }
//     console.log(firstName);                    // Saloni
//     // console.log(lastName);      // Error  =>  it's block scoped
// }
// // console.log(firstName);         // Error  =>  it's block scoped
// // console.log(lastName);         // Error  =>  it's block scoped


// function addOne(num){
//     return num + 1
// }
// console.log(addOne(5));    // 6


// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5));      // 7


// function addOne (num){
//     return num + 1
// }
// addOne();

// const addTwo = function (num){
//     return num + 2
// }
// addTwo();




// addOne();
// function addOne (num){
//     return num + 1
// }

// addTwo();
// const addTwo = function (num){
//     return num + 2
// }



console.log(addOne(2));     // 3
function addOne (num){
    return num + 1
}

// addTwo();
const addTwo = function (num){
    return num + 2
}
