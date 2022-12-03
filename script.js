//
// Added additional variables to complete the program and makeup a password with random numbers and letters.
var bigAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"];
var lilAlpha = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

// var calculations -- this is used to combine all the arrays for an answer. 
var calculations = [];
//Use the variable above to include all of the arrays and then UserChoice below to create the proper length of password. 
var userChoice = [];

// This variable will ask to include special characters
var inclSpecialCharacters = confirm("Click OK to include special characters.");

// This will ask to include numbered characters
var inclNumbers = confirm("Click OK to inlcude numbered characters.");

// This variable asks about lowercase characters
var inclLittleLetters = confirm("Click OK to include lowercase characters.");

// This variable asks about uppercase characters
var inclBigLetters = confirm("Click OK to include uppercase characters.");


// This function is required to make the existing code work and will control the process of generating a password.
function generatePassword(i) {
  for (var i = 0; i <= length; i++);
  
  prompt("Please enter a number between 8 and 33 characters in length.");

//variables below pick a random character from the arrays above
  var bigLetters = bigAlpha[Math.floor(Math.random()*bigAlpha.length)];
    console.log(bigLetters);

  var littleLetters = lilAlpha[Math.floor(Math.random()*lilAlpha.length)];
    console.log(littleLetters);

  var digits = numbers[Math.floor(Math.random()*numbers.length)];
    console.log(digits);
  
  var special = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    console.log(special); 

  if (length < 8) {
    alert("Password must be between 8 and 33 characters long. Try again Please.");
    return null;
  }

  if (length > 33) {
    alert("Password must be less than 33 characters long. Please try again.");
    return null;
  }

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Adds event listener to the generate button
generateBtn.addEventListener("click", writePassword);




