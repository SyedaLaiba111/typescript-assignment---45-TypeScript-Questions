// Array of famous mountains
const mountainList: string[] = [
    "Mount Everest",
    "K2",
    "Mount Kilimanjaro",
    "Matterhorn",
    "Mount Fuji",
    "Denali",
    "Mont Blanc",
  ];
  
  console.log("List of Famous Mountains:");
  mountainList.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
  });
  