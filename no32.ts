const current_users: string[] = ["John", "Alice", "Bob", "Eve", "Charlie"];

// List of new users
const new_users: string[] = ["John", "Sarah", "Frank", "Megan", "Alice"];

// Function to check if a username is unique (case-insensitive)
function isUsernameUnique(username: string): boolean {
    const lowerCaseUsername = username.toLowerCase();
    return !current_users.some((user) => user.toLowerCase() === lowerCaseUsername);
}

// Loop through new users and check uniqueness
for (const new_username of new_users) {
    if (isUsernameUnique(new_username)) {
        console.log(`The username "${new_username}" is available.`);
    } else {
        console.log(`Sorry, the username "${new_username}" is already taken. Please enter a new username.`);
    }
}
