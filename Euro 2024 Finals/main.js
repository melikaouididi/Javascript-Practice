/*
    Create a project that simulates the game Portugal - France Quarter Finals Euro 2024

    Each match should have 90 minutes and each minute can have one of these events:

    - Portugal goal
    - France goal
    - Substitution
    - Foul
    - Yellow Card
    - Corner kick
*/

let min = 1; // Minimum value for random number generation
let max = 40; // Maximum value for random number generation

let randomNumber = 0; // Variable to store the generated random number

let i = 1; // Counter for the match minutes

let portugalGoals = 0; // Counter for Portugal's goals
let franceGoals = 0; // Counter for France's goals
let substitutions = 0; // Counter for substitutions
let fouls = 0; // Counter for fouls
let yellowCards = 0; // Counter for yellow cards
let cornerKicks = 0; // Counter for corner kicks

while (i <= 90) {
  // Loop through each minute of the match (90 minutes total)
  // Generate a random number between min and max
  randomNumber = Math.floor(Math.random() * (max - min) + min);

  let event = ""; // Variable to store the current event

  if (randomNumber == 1) {
    // Check if the random number is 1 (Portugal goal)
    console.log(i, "- Portugal scored!!!");
    portugalGoals++; // Increment Portugal's goal counter
  } else if (randomNumber == 2) {
    // Check if the random number is 2 (France goal)
    console.log(i, "- France scored!!!");
    franceGoals++; // Increment France's goal counter
  } else if (randomNumber >= 3 && randomNumber <= 6) {
    // Check if the random number is between 3 and 6 (Substitution)
    console.log(i, "- Substitution");
    substitutions++; // Increment substitutions counter
  } else if (randomNumber >= 6 && randomNumber <= 10) {
    // Check if the random number is between 6 and 10 (Foul)
    console.log(i, "- Foul");
    fouls++; // Increment fouls counter
  } else if (randomNumber >= 10 && randomNumber <= 30) {
    // Check if the random number is between 10 and 30 (Yellow card)
    console.log(i, "- Yellow card");
    yellowCards++; // Increment yellow cards counter
  } else if (randomNumber >= 30 && randomNumber <= 40) {
    // Check if the random number is between 30 and 40 (Corner kick)
    console.log(i, "- Corner kick");
    cornerKicks++; // Increment corner kicks counter
  }

  i++; // Increment the minute counter
}

console.log("\nMatch Summary:"); // Display the match summary
console.log("Portugal Goals:", portugalGoals);
console.log("France Goals:", franceGoals);
console.log("Substitutions:", substitutions);
console.log("Fouls:", fouls);
console.log("Yellow Cards:", yellowCards);
console.log("Corner Kicks:", cornerKicks);

if (portugalGoals > franceGoals) {
  // Determine the winner based on the goals
  console.log("\nWinner: Portugal");
} else if (franceGoals > portugalGoals) {
  console.log("\nWinner: France");
} else {
  console.log("\nMatch is a Draw");
}
