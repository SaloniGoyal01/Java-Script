// const Score = true;
// if(Score){
//     console.log("hello");
// }


// if(true){
//     console.log("hello");
// }


// if(2 === 2){
//     console.log("hello world");
// }


// const temperature = 35;
// if(temperature > 30){
//     console.log("Executed");
// }
// console.log("temperature is greater than 30");


// const score = 100;
// if(score > 90){
//     var power = "fly"
//     console.log(power);     // fly
// }
// console.log(power);        // fly



// const score = 100;
// if(score > 90){
//     const power = "fly"
//     console.log(power);     // fly
// }
// console.log(power);        // Error 


// const score = 100;
// if(score > 90){
//     var power = "fly"
//     console.log(`user power ${power}`);     // user power fly
// }
// console.log(`user power ${power}`);        // user power fly


// const score = 100;
// if(score > 90){
//     let power = "fly"
//     console.log(`user power ${power}`);     // user power fly
// }
// console.log(`user power ${power}`);        // Error


// const marks = 95;
// if(marks >= 95){
//     console.log('A');
// }
// else{
//     console.log('B');
// }


// const balance = 1000
// if(balance >= 1000) console.log("test"), console.log("test2");           // IMPLICIT


// const user = true;
// const userLoggedIn = true;
// if(user && userLoggedIn){
//     console.log("Add to Cart");      // Add to Cart
// }

// if(user && userLoggedIn && 2==3){
//     console.log("Add");
// }

// if(user || 2==3){
//     console.log("Can Buy");       // Can Buy
// }



//                                Switch

// const month = 3;
// switch(month){
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//         default :
// console.log("Default Case");
// break;
// }


// const weekDay = "Mon";
// switch(weekDay){
//     case "Sun" :
//         console.log("Sunday");
//         break;
//     case "Mon" :
//         console.log("Monday");
//         break;
//     case "Tues" :
//         console.log("Tuesday");
//         break;
//     case "Wed" :
//         console.log("Wednesday");
//         break;
// default :
// console.log("Default Case");
// break;
// }

 
//               // TRUTHY VALUES

// true, "0", 'false', " ", [], {}, function(){}



// const email = "abc@gmail.com";           // Got User Email
// if(email){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User Email");
// }


// const email = {}            // Got User Email
// if(email){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User Email");
// }


// const email = []        // Got User Email
// if(email){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User Email");
// }


// const email = []; 
// if(email.length === 0){
//     console.log("Array is Empty");
// }


// const email = " "          // Got User Email
// if(email){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User Email");
// }


//              // FALSY VALUES

// false, NaN, null, undefined, "", 0, -0, BigInt 0n



// const email = ""             // Don't have User Email
// if(email){ 
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have User Email");
// }



// const emptyObject = {}
// if(Object.keys(emptyObject).length == 0){
//     console.log("Object is Empty");      // Object is Empty
// }
       



//                      // NULLISH COALESCING OPERATOR (??): null undefined

// let val1, val2, val3, val4;
// val1 = 5 ?? 10;
// val2 = null ?? 20;
// val3 = undefined ?? 30;
// val4 = null ?? 40 ?? 50;
// console.log(val1);          // 5
// console.log(val2);          // 20
// console.log(val3);          // 30
// console.log(val4);          // 40 




//                  //  TERNIARY OPERATOR (Condition ? True : False)
                   
// const TeaPrice = 100;
// TeaPrice >= 80 ? console.log("More than 80") : console.log("less than 80")


// const Score = 200;
// Score > 250 ? console.log("more than 250") : console.log("less than 250")
