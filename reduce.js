// const numbers = [1,4,6]
// // const myTotalNum = numbers.reduce(function(acc, curVal){          // acc => accumulator(previous value),  curVal => Current Value
// //     console.log(`acc ${acc} and curVal is : ${curVal}`)
// //     return acc + curVal
// // }, 3)      // Value initialize with => 3
// // console.log(myTotalNum)

//                        // OR

// const myTotalNum = numbers.reduce((acc, curVal) => (acc + curVal), 0)
// console.log(myTotalNum)



const shoppingCart = [
    {
        CourseName : 'js',
        CoursePrice : 1999
    },
    {
        CourseName : 'java',
        CoursePrice : 999
    },
    {
        CourseName : 'py',
        CoursePrice : 2999
    }
]
const addToPay = shoppingCart.reduce((acc, curVal) => (acc + curVal.CoursePrice), 0)
console.log(addToPay)