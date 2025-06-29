//     IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function one (){
    console.log(`Hello`);       // Hello
}) ();

(function two (){
    console.log(`hii`);        // hii
}) ();

// Arrow Function
( () => {
    console.log(`heyy`);      // heyy
}) ();


( (name) => {
    console.log(`Hello ${name}`)      // Hello Saloni
}) ("Saloni");