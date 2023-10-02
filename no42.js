"use strict";
function Show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
const MagicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const greatMagicians = make_great(MagicianNames);
Show_magicians(greatMagicians);
