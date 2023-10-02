
const guestList: string[] = ["mommy ", "Einstein", "papa","sites"];

function sendInvitation(guestName: string): void {
  console.log(`Dear ${guestName},\nYou are cordially invited to dinner at my place on Saturday, October 1st, 2023. Please RSVP.`);
}

// Send invitations to the initial guests
guestList.forEach((guest) => {
  sendInvitation(guest);
});

// Simulate a guest canceling
const guestCanceled: string = guestList[1]; 
console.log(`\nUnfortunately, ${guestCanceled} can't make it to dinner.\n`);

// Replace the canceled guest with a new guest
const newGuest: string = "Laiba";
guestList[1] = newGuest;

// Send updated invitations
console.log("Updated guest list:");
guestList.forEach((update)=>{
    sendInvitation(update)
})