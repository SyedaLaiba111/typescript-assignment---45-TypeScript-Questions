"use strict";
const PName = "John Doe";
function toTitleCase(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log("Titlecase: " + toTitleCase(PName));
