function Make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Creating shirts with default size and message
Make_shirt(); // Large shirt with the default message
Make_shirt("Medium"); // Medium shirt with the default message

// Creating a custom-sized shirt with a different message
Make_shirt("Small", "JavaScript is fun!"); // Small shirt with a custom message
