//
// Added additional variables to complete the program and makeup a password with random numbers and letters.
var bigAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"];
var lilAlpha = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

//***/ the function below to include all of the arrays and then var Calc below to create the proper length of password. 
function userChoices() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'), 10);

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  };

//The alerts below let the user know that they need to try again with input for parameters. 
if (length < 8) {
  alert("Password must be between 8 and 128 characters long. Try again Please.");
  return null;

} else if (length > 128) {
  alert("Password must be 128 characters or less. Please try again.");
  return null;
}

  // The next 4 variables (True/False) below will ask to include special characters, numbers, upper and lowercase letters. 
  var inclSpecialCharacters = confirm("Click OK to include special characters.");

  var inclNumbers = confirm("Click OK to inlcude numbered characters.");

  var inclLittleLetters = confirm("Click OK to include lowercase characters.");

  var inclBigLetters = confirm("Click OK to include uppercase characters.");

  // if (inclBigLetters === false && inclLittleLetters === false && inclNumbers === false && inclSpecialCharacters === false);
  //   {
  //     alert("Please select atleast one character type");
  //   return null;
  //   }

//* An Object is being used to hold the inputs from the user.  
var userPicks = {
  length: length,
  inclBigLetters: inclBigLetters,
  inclLittleLetters: inclLittleLetters,
  inclSpecialCharacters: inclSpecialCharacters,
  inclNumbers: inclNumbers,
};

  return userPicks;
}

//This function gets a random value from a random array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// ***This function is required to make the existing code work and will control the process of generating a password.
function generatePassword() {  
  var picks = userChoices();
  var results = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!picks) return null;

  if (picks.inclBigLetters) {
    possibleCharacters = possibleCharacters.concat(bigAlpha);
    guaranteedCharacters.push(getRandom(bigAlpha));
  }

  if (picks.inclLittleLetters) {
    possibleCharacters = possibleCharacters.concat(lilAlpha);
    guaranteedCharacters.push(getRandom(lilAlpha));
  }

  if (picks.inclNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (picks.inclSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < picks.length; i++);
    results[i] = guaranteedCharacters[i];
  // prompt("Please enter a number between 8 and 33 characters in length.");
  for (var i = 0; i < guaranteedCharacters.length; i++);
  results[i] = guaranteedCharacters[i];

  //This should bring together all of the arrays make a final calculation for a password. 
  return results.join("");

};
//variables below pick a random character from the arrays above
// var bigLetters = bigAlpha[Math.floor(Math.random()*bigAlpha.length)];
// console.log(bigLetters);

// var littleLetters = lilAlpha[Math.floor(Math.random()*lilAlpha.length)];
// console.log(littleLetters);

// var digits = numbers[Math.floor(Math.random()*numbers.length)];
// console.log(digits);

// var special = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
// console.log(special); 

//---------------------------Don't touch--------------------------------------existing code below------------------
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




