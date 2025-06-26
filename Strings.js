const name = "Saloni";
const age = 19;
console.log(name + " " + age);
console.log(`My name is: ${name} and My Age is: ${age}`);
console.log(name.length); // 6
console.log(name.toUpperCase()); // "SALONI"
console.log(name.toLowerCase()); // "saloni"
console.log(name.charAt(0)); // "S"
console.log(name.charAt(3)); // "o"
console.log(name.indexOf('S')); // 0
console.log(name.indexOf('o')); // 3

const newString = name.substring(0, 3);
console.log(newString); // "Sal"

const anotherString = name.slice(-5, 3);
console.log(anotherString);    // "al"

const trimmedString = "  Saloni  ";
console.log(trimmedString);              // "  Saloni  "    // Space will be print at the start and end
console.log(trimmedString.trim());      // "Saloni"         // Space will be removed at the start and end
console.log(trimmedString.trimStart()); // "Saloni  "      // Space will be removed at the start
console.log(trimmedString.trimEnd());   // "  Saloni"      // Space will be removed at the end
console.log(trimmedString.trim().length);              // 6
console.log(trimmedString.trimStart().length);        // 8
console.log(trimmedString.trimEnd().length);          // 8


const replacedString = name.replace('Saloni', 'Goyal');
console.log(replacedString); // "Goyal"

const includesString = name.includes('Sal');    // It returns true if the value is found, and false otherwise. 
console.log(includesString);  // true    // Check if the string contains 'Sal'


const startsWithString = name.startsWith('S'); // It returns true if the string starts with the specified value, and false otherwise.
console.log(startsWithString); // true    // Check if the string starts with  'S'
const endsWithString = name.endsWith('i'); // It returns true if the string ends with the specified value, and false otherwise.
console.log(endsWithString); // true    // Check if the string ends with 'i'
