"use strict";
// Array of places to visit (not in alphabetical order)
const placesToVisit = ["Paris", "Tokyo", "New York City", "Venice", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// Show that the original array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Show that the original array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
