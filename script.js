// Assignment Code
var generateBtn = document.querySelector("#generate");


//Assign variable arrays

var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric =[0,1,2,3,4,5,6,7,8,9]
var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "~", "<", ">", "+", "="]



//Prompt user to select number and type of characters to include in password

var passwordLength = prompt ("Enter a whole number between 8 and 128");
  if (passwordLength => 8) && (passwordLength =< 128) 
     //then prompt for the character types

     else var passwordLength = prompt ("Enter a WHOLE NUMBER between 8 and 128");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}