// for(let i = 1; i <= 5; i++){
//     console.log("hello")         
// }


// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }     


// for(let index = 1; index <= 5; index++){
//     console.log(index)
// }



// for(let index = 1; index < 5; index++){
//     const elememt = index;
//     console.log(elememt)
// }


// for(let i=1; i<=3; i++){
//     console.log(`Outer loop value :  ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(`inner loop value :  ${j} and inner loop :  ${i}`);
//     }
// }


// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }



// let myArray = ["Superman", "Batman", "Flash"];
// console.log(myArray.length);        
// for(let i=0; i<3; i++){
//     // console.log(myArray);          // [ 'Superman', 'Batman', 'Flash' ]
//     const elememt = myArray[i];
//     console.log(elememt);
// }



// for(let i=1; i<=10; i++){
//     if(i == 5){
//         console.log(`5 is Detected`);
//         break;
//     }
//     // console.log(i);
//     console.log(`value of i is : ${i}`)
// }



for(let i=1; i<=10; i++){
    if(i == 5){
        console.log(`5 is Detected`);
       continue;
    }
    // console.log(i);
    console.log(`value of i is : ${i}`)
}