/*

    Challenge: Cinema Booking System

    Description:
    Create a basic cinema booking system where users can view available 
    movies and book tickets. The system should include classes for Movie 
    and User. Users should be able to view available movies and book tickets 
    for a specific movie.

    Tasks:

    Movie Class: Create a Movie class to represent a movie with properties 
    for its name, genre, and available seats.
    User Class: Create a User class to represent a user. Users should be 
    able to view available movies and book tickets.
    Implement methods to handle booking tickets and viewing available movies.

*/

class Movie {
  constructor(name, genre, availableSeats) {
    this.name = name; // Initialize movie name
    this.genre = genre; // Initialize movie genre
    this.availableSeats = availableSeats; // Initialize available seats for the movie
  }

  movieDetails() {
    // Return a string with the movie details
    return (
      this.name +
      " (" +
      this.genre +
      ") - Available Seats: " +
      this.availableSeats
    );
  }

  bookSeat() {
    // Book a seat if available, return true if successful, false otherwise
    if (this.availableSeats > 0) {
      this.availableSeats--;
      return true;
    } else {
      return false;
    }
  }

  getMovieNameWithoutNumber() {
    // Extract and return the movie name without the leading number
    return this.name.split(" - ")[1];
  }
}

class User {
  constructor(name) {
    this.name = name; // Initialize user name
    this.history = []; // Initialize booking history array
  }

  viewMovies(movies) {
    // Display details of all available movies
    movies.forEach((movie) => {
      console.log(movie.movieDetails());
    });
  }

  bookTicket(movie) {
    // Attempt to book a ticket for the specified movie
    if (movie.bookSeat()) {
      const bookingTime = new Date().toLocaleString(); // Get current time
      const movieName = movie.getMovieNameWithoutNumber(); // Get movie name without number
      this.history.push({
        userName: this.name,
        movieName: movieName,
        time: bookingTime,
      });

      console.log("Ticket booked for " + movie.name);
    } else {
      console.log("Sorry, no available seats for " + movie.name);
    }
  }

  printBookingHistory() {
    // Print the user's booking history
    console.log("Booking History:");
    this.history.forEach((record) => {
      console.log(
        record.userName + " booked " + record.movieName + " at " + record.time
      );
    });
  }
}

const movie1 = new Movie("1 - The Matrix", "Sci-Fi", 5); // Create movie instances
const movie2 = new Movie("2 - The Godfather", "Crime", 3);
const movie3 = new Movie("3 - Finding Nemo", "Animation", 10);

const movies = [movie1, movie2, movie3]; // Array of movie instances

function main() {
  const prompt = require("prompt-sync")(); // Require prompt-sync for user input

  const userName = prompt("Enter your name:"); // Get user name
  const user = new User(userName); // Create a new user instance

  while (true) {
    // Display menu options
    console.log("\n1. View available movies");
    console.log("2. Book a ticket");
    console.log("3. View booking history");
    console.log("4. Exit");

    const choice = prompt("Enter your choice: "); // Get user choice

    if (choice === "1") {
      console.log("\nAvailable Movies:");
      user.viewMovies(movies); // Display available movies
    } else if (choice === "2") {
      const movieChoice = prompt(
        "Enter the number of the movie you want to book a ticket for: "
      );
      const movieIndex = parseInt(movieChoice) - 1; // Convert input to array index

      if (movieIndex >= 0 && movieIndex < movies.length) {
        user.bookTicket(movies[movieIndex]); // Book ticket for the chosen movie
      } else {
        console.log("Invalid choice. Please try again."); // Handle invalid input
      }
    } else if (choice === "3") {
      user.printBookingHistory(); // Display user's booking history
    } else if (choice === "4") {
      console.log("Goodbye!"); // Exit the program
      break;
    } else {
      console.log("Invalid choice. Please try again."); // Handle invalid menu choice
    }
  }
}

main(); // Call the main function to start the program
