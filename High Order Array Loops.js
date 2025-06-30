       // forof loop 

// for (const element of object) {
    
// }

// const arr = [1,2,3,4,5];
// for(const num of arr){
//     console.log(num);
// }


// const greetings = "Hello World";
// for(const greet of greetings){
//     console.log(greet);
// }


// const greetings = "Hello World";
// for(const char of greetings){
//     console.log(char);
// }



// const greetings = "Hello World";
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


                // MAP

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// // console.log(map);

// for(const key of map){
//     console.log(key)
// }

// for(const [key] of map){
//     console.log([key])
// }

// for(const [key, value] of map){
//     console.log(key, ":-", value)
// }


// for(const value of map){
//     console.log(value)
// }


// const obj = {               //  Error: obj is not iterable
//     name1 : "Jack",
//     name2 : "John"
// }
// for(const [key, value] of obj){
//     console.log(key, value);
// }



                     // forin loop
// for (const key in object) {
                        
// }


// const obj = {
//     name1 : "Jack",
//     name2 : "John",
//     name3 : "Sam"
// }
// // for(const key in obj){
// //     console.log(key);
// // }

// // for(const key in obj){
// //     console.log(obj[key])
// // }

// // for(const key in obj){
// //     console.log(`${key} is shortcut of ${obj[key]}`);
// // }



// const programming = ["js", "c++", "dsa", 'java']
// for(const key in programming){
// // console.log(key);
// console.log(programming[key]);
// }





                               // forEach loop

const coding = ['js', 'dsa', 'cpp', 'java'];
// coding.forEach(function(value){
//     console.log(value);
// })

// coding.forEach((value) => {
//     console.log(value);
// })



const myCoding = [
    {
        languageName : 'JavaScript',
        languageFile : 'JS'
    },
    {
        languageName : 'Java',
        languageFile : 'java'
       },
       {
        languageName : 'phython',
        languageFile : 'py'
       }
]
myCoding.forEach( (value) => {
    // console.log(value);
    // console.log(value.languageName);
    console.log(value.languageFile);
})
