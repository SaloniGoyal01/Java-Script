// let myDate = new Date ();
// console.log(myDate);
// console.log(myDate.toString());  
// console.log(myDate.toString().length);   
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date (2024, 0, 17);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toTimeString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());


// let myCreatedDate = new Date (2024, 01, 17);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toTimeString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());


// let myCreatedDate = new Date (2024, 0, 17, 10, 30, 6); // Year, Month (0-11), Day, Hours, Minutes, Seconds
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());



let mynewDate = new Date (2025, 2, 15);
console.log(mynewDate);

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(mynewDate.getTime()); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date
console.log(mynewDate.getFullYear());  // Returns the year of the specified date
console.log(mynewDate.getMonth());   // Returns the month (0-11) of the specified date
console.log(mynewDate.getDate());   // Returns the day of the month (1-31) of the specified date

console.log(Math.floor(Date.now() / 1000)); // Returns the number of seconds since January 1, 1970, 00:00:00 UTC

