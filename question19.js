"use strict";
const GuestList = ["mommy ", "Einstein", "papa", "sites"];
function SendInvitation(guestName) {
    console.log(`Dear ${guestName},\nYou are cordially invited to dinner at my place on Saturday, October 1st, 2023. Please RSVP.`);
}
// Send invitations to the initial guests
GuestList.forEach((guest) => {
    SendInvitation(guest);
});
// Simulate a guest canceling
const GuestCanceled = GuestList[1];
console.log(`\nUnfortunately, ${GuestCanceled} can't make it to dinner.\n`);
// Replace the canceled guest with a new guest
const NewGuest = "Laiba";
GuestList[1] = NewGuest;
// Send updated invitations
console.log("Updated guest list:");
GuestList.forEach((update) => {
    SendInvitation(update);
});
console.log("number of guest are :  " + GuestList.length);
