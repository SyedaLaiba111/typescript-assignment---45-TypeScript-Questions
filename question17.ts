let lsitOfGuest:string[]=["laiba","fatima","meryam","areeba","kinza","aneela","mubashra","werda"]

lsitOfGuest.forEach(element => {
    console.log(`heelo dear ${element} ! you are invited for dinner kindly be on time . thankyou`)
});

// Simulate a guest canceling
const notComming: string = lsitOfGuest[1]; 
console.log(`\nUnfortunately, ${notComming} can't make it to dinner.\n`);

const newwGest: string = "Laiba";
lsitOfGuest[1] = newwGest;
//ading new member at beginig of array
lsitOfGuest.unshift("princess")
// adding in middle
lsitOfGuest.splice(1, 0 , "newguestin middle")
//adding  at the end

lsitOfGuest.push("last guest")


console.log("you can only invite two people")
while(lsitOfGuest.length>2){
   const removedGuest:String  | undefined= lsitOfGuest.pop();
    console.log(`Sorry, ${removedGuest}, you're uninvited due to limited space.`);
}

lsitOfGuest.forEach(elemnewent => {
    console.log(`heelo dear ${elemnewent} ! you are invited for dinner kindly be on time . thankyou`)
    
});