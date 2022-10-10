const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

//task 1
function makeLegend(name) {
  return name + " is now a legend.";
}

legendaryCelebs = [];
vowelCelebs = [];
vowels=["A","E","I","O","U"];
for (let i=0; i<celebs.length; i++) {
  currentCeleb = celebs[i];
  legendaryCelebs.push(makeLegend(currentCeleb));
  for (let i=0; i<vowels.length; i++) {
    if (currentCeleb.slice(0,1)==vowels[i]) {
      vowelCelebs.push(currentCeleb);
    }
  }
}
console.log(vowelCelebs);

//task 2
