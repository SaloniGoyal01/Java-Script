// const score = 200;
// console.log(score);
// console.log(typeof score);      // "number"  
// console.log(score.toString());   // "200"    // Convert number to string
// console.log(typeof toString(score));   // "string"  // Check the type of the converted value

// console.log(score.toString().length);    // 3   
// console.log(score.toFixed(2));   // 200.00  // Convert number to string with 2 decimal places
// console.log(score.toFixed(2).length)  // 6   // Check the length of the converted value

// console.log(score.toExponential(1));  // "2.0e+2"  // Convert number to string in exponential notation with 1 decimal place
// console.log(score.toPrecision(2));  // "2.0e+2"  // Convert number to string with 2 significant digits
// console.log(score.toPrecision(3));  //  "200"  // Convert number to string with 3 significant digits
// console.log(score.toPrecision(4));  // "200.0"  // Convert number to string with 4 significant digits
  

// const pi = 3.14159;;
// console.log(pi.toPrecision(1));   // "3"  // Convert number to string with 1 significant digit
// console.log(pi.toPrecision(2));   // "3.1"  // Convert number to string with 2 significant digits
// console.log(pi.toPrecision(3));   // "3.14"  // Convert number to string with 3 significant digits


// const NUm = 56.823;
// console.log(NUm.toFixed(0));   // "57"  // Convert number to string with 0 decimal places
// console.log(NUm.toFixed(1));   // "56.8"  // Convert number to string with 1 decimal place
// console.log(NUm.toFixed(4));   // "56.8230"  // Convert number to string with 4 decimal places
// console.log(NUm.toPrecision(2));  // "57"  // Convert number to string with 2 significant digits
// console.log(NUm.toPrecision(3));  // "56.8"  // Convert number to string with 3 significant digits
// console.log(NUm.toPrecision(1));  // "6e+1"  // Convert number to string with 1 significant digit in exponential notation


// const hundreds = 100000;
// console.log(hundreds.toLocaleString());  // "100,000"  // Convert number to string with locale-specific formatting
// console.log(hundreds.toLocaleString('en-IN'));  // "1,00,000"  // Convert number to string with Indian locale formatting
// console.log(hundreds.toLocaleString('en-US'));  // "100,000"  // Convert number to string with US locale formatting


                 // MATHS

console.log(Math);
console.log(Math.abs(-4));   // 4
console.log(Math.abs(-5.5)); // 5.5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5));  //5
console.log(Math.round(4.6)); // 5
console.log(Math.max(1,2,3,4));  // 4
console.log(Math.min(1,2,3,4));   // 1
console.log(Math.sqrt(9));   // 3
console.log(Math.pow(2,4));   // 16
console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // 2.718281828459045
console.log(Math.random());  // Random number between 0 and 1
console.log(Math.random() * 10);  // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10));  // Random integer between 0 and 9
console.log(Math.ceil(Math.random() * 10));  // Random integer between 1 and 10


const min = 10;
const max = 20;
// console.log((Math.random() * (max - min + 1)));
// console.log(Math.floor(Math.random() * (max - min + 1))); 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   // Random integer between 10 and 20


