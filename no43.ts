function SHow_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function MAke_great(magicians: string[]): string[] {
    const GreatMagicians: string[] = [];
    for (const magician of magicians) {
        const GreatMagician = magician + " the Great";
        GreatMagicians.push(GreatMagician);
    }
    return GreatMagicians;
}

const MAgicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const GreatMagicians = make_great([...MAgicianNames]); // Create a copy of the original array

SHow_magicians(MAgicianNames); // Display the original array
SHow_magicians(GreatMagicians); // Display the modified array
