const myNum = [1,2,3,4,5,6,7,8,9];
// const numbers = myNum.filter ((num) => (num > 4))
// console.log(numbers)

// const  numbers = myNum.filter ((num) => {
//     return num > 4
// })
// console.log(numbers)

// const numbers = []
// myNum.forEach((num) => {
//     if (num > 4){
//         numbers.push(num)
//     }
// })
// console.log(numbers)




const myBooks = [
    {
    bookName : 'BookOne',
    bookEditon : 1994,
    bookPrice : 200
},
{
    bookName : 'BookTwo',
    bookEditon : 2000,
    bookPrice : 300
},
{
    bookName : 'BookThree',
    bookEditon : 2001,
    bookPrice : 500
}
];
// // const book = myBooks.filter((bk) => bk.bookPrice > 300);
// // console.log(book)


// let book = myBooks.filter( (bk) => bk.bookEditon === 2001)
//  book = myBooks.filter((bk) => {
//     return bk.bookEditon === 2001 && bk.bookPrice > 300
// })
// console.log(book)






                           // MAP
                        
// const myNumber = [1,2,3,4,5,6,7,8,9]
// const nums = myNumber.map((num) => num + 10)      
// console.log(nums)          
                   
                      // OR

// const myNumber = [1,2,3,4,5,6,7,8,9]
// const nums = myNumber.map((num) => { 
//     return num + 10 
// })      
// console.log(nums)    



// const numbers = [1,2,3,4,5,6,7,8,9]
// const nums = numbers.map((num) => (num * 10)+1)
// console.log(nums)

const numbers = [1,2,3,4,5,6,7,8,9]
const nums = numbers.map((num) => (num * 10)+1). filter((num) => num > 50)
console.log(nums)