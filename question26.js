"use strict";
const alien_colorr = "green";
if (alien_colorr === "green") {
    console.log("the player earned 5 points");
}
else if (alien_colorr === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
}
else if (alien_colorr === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}
