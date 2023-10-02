// Tests for equality and inequality with strings
console.log("String Equality Test (True):");
console.log("apple" == "apple"); // True

// Tests using the lowercase function
console.log("Lowercase Test (True):");
console.log("HELLO".toLowerCase() == "hello"); // True

// Numerical tests
console.log("Numerical Equality Test (True):");
console.log(10 == 10); // True

console.log("Greater Than Test (True):");
console.log(20 > 10); // True

console.log("Less Than Test (True):");
console.log(5 < 10); // True

console.log("Greater Than or Equal To Test (True):");
console.log(10 >= 10); // True

console.log("Less Than or Equal To Test (True):");
console.log(5 <= 10); // True

// Tests using "and" and "or" operators
console.log("Logical AND Test (True):");
console.log(true && true); // True

console.log("Logical OR Test (True):");
console.log(true || false); // True

// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry"];
console.log("Array Inclusion Test (True):");
console.log(fruits.includes("banana")); // True

// Test whether an item is not in an array
console.log("Array Exclusion Test (True):");
console.log(!fruits.includes("grape")); // True
