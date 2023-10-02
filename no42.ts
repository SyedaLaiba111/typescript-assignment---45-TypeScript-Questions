function Show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        const greatMagician = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

const MagicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const greatMagicians = make_great(MagicianNames);

Show_magicians(greatMagicians);
