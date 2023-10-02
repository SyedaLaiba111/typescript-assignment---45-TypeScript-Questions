"use strict";
function SHow_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function MAke_great(magicians) {
    const GreatMagicians = [];
    for (const magician of magicians) {
        const GreatMagician = magician + " the Great";
        GreatMagicians.push(GreatMagician);
    }
    return GreatMagicians;
}
const MAgicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const GreatMagicians = make_great([...MAgicianNames]); // Create a copy of the original array
SHow_magicians(MAgicianNames); // Display the original array
SHow_magicians(GreatMagicians); // Display the modified array
