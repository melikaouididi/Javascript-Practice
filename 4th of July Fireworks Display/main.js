/*

    Lesson Challenge 2: 4th of July Fireworks Display

    Description:

    Create a program that simulates a fireworks display with different messages based 
    on the time of the day.

    Instructions:

    - Declare a variable time and assign it a value representing the hour of the day (0-23).
    - Use if statements to determine the appropriate message for different times of the day:
    - Between 0 and 5, log "Early morning fireworks show!"
    - Between 6 and 11, log "Morning parade and fireworks!"
    - Between 12 and 17, log "Afternoon BBQ and fireworks!"
    - Between 18 and 21, log "Evening fireworks display!"
    - Between 22 and 23, log "Late night fireworks show!"

*/

let time = 16; // Declare a variable 'time' and assign it a value representing the hour of the day (0-23).

if (time >= 0 && time <= 5) { // Check if the time is between 0 and 5.
    console.log("Early morning fireworks show!"); // If true, log the appropriate message.
} else if (time >= 6 && time <= 11) { // Check if the time is between 6 and 11.
    console.log("Morning parade and fireworks!"); // If true, log the appropriate message.
} else if (time >= 12 && time <= 17) { // Check if the time is between 12 and 17.
    console.log("Afternoon BBQ and fireworks!"); // If true, log the appropriate message.
} else if (time >= 18 && time <= 21) { // Check if the time is between 18 and 21.
    console.log("Evening fireworks display!"); // If true, log the appropriate message.
} else if (time >= 22 && time <= 23) { // Check if the time is between 22 and 23.
    console.log("Late night fireworks show!"); // If true, log the appropriate message.
} else {
    console.log("Invalid time! Please enter a time between 0 and 23."); // If the time is outside the 0-23 range, log an error message.
}
