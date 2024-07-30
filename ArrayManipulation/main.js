/*

    Challenge: Array Manipulation

    Description:
    Write a function that takes an array of integers and returns a new array 
    where each element is the square of the original element if the original
    element is even, and the cube of the original element if it is odd.

*/

function arrayManipulation(arr) {
  const result = []; // Declare an empty array to store the results
  for (let num of arr) {
    // Iterate through each element in the input array
    if (num % 2 === 0) {
      // Check if the number is even
      result.push(num ** 2); // If even, push its square to the result array
    } else {
      // Otherwise, the number is odd
      result.push(num ** 3); // Push its cube to the result array
    }
  }
  return result; // Return the result array containing the manipulated values
}

const inputArray = [1, 2, 3, 4, 5]; // Define an example input array
const outputArray = arrayManipulation(inputArray); // Call the function with the input array and store the result
console.log(outputArray); // Log the output array to the console
