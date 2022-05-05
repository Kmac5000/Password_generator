// Assignment code here
var userLength = prompt("How many charcters for your password?")
var userLowcase = confirm("Would you like lowercase letters?")
var userUpper = confirm("Would you like UPPER case letters?")
var confirm = confirm("Would you like to use numbers?")
var confirm = confirm("would you like to have any special characters?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var chars = ""
}

