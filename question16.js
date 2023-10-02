"use strict";
const listGuest = ["mommy ", "Einstein", "papa", "sites"];
function sendInvite(guestName) {
    console.log(`Dear ${guestName},\nYou are cordially invited to dinner at my place on Saturday, October 1st, 2023. Please RSVP.`);
}
// Send invitations to the initial guests
listGuest.forEach((guest) => {
    sendInvite(guest);
});
// Simulate a guest canceling
const canceled = listGuest[1];
console.log(`\nUnfortunately, ${canceled} can't make it to dinner.\n`);
// Replace the canceled guest with a new guest
const newGest = "Laiba";
listGuest[1] = newGest;
//ading new member at beginig of array
listGuest.unshift("princess");
// adding in middle
listGuest.splice(1, 0, "newguestin middle");
//adding  at the end
listGuest.push("last guest");
// Send updated invitations
console.log("Updated guest list:");
listGuest.forEach((update) => {
    sendInvite(update);
});
