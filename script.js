// Assignment Code
var generateBtn = document.querySelector("#generate");



//Create VARIABLES with all character options


    var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
    var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var numeric= ["0","1","2","3","4","5","6","7","8","9"]
    var special= ["!","@","#","$","%","^","&","*","(",")","?","~","<",">","+","="]
    var finalChar= []



//Prompt user to enter password length

var passwordLength = prompt ("Enter a number between (or including) 8 and 128");
    if (passwordLength >= 8 && passwordLength <= 128) {  //check for number between 8-128
      passwordLength = Math.floor(passwordLength);  //truncates figure to whole number in the event the user enters a decimal
      alert ("Your password will have " + passwordLength + " characters.");
    }
      else {
        var passwordLength = prompt ("Enter a WHOLE NUMBER BETWEEN (or including) 8 and 128");
    }


//Prompt user to select number and type of characters to include in password
    
    alert("Identify which types of the following characters you want to include in password: uppercase letters, lowercase letters, numbers, and special characters");
   
 
 //Prompt user to select number and type of characters to include in password

        var confirmUpper = confirm("Include uppercase letters?");
          if (confirmUpper == false) {
            var uppercase = [];   //empties character array if the user does not choose to include the characters
        }
          else {var finalChar = uppercase;
        }


        var confirmLower = confirm("Include lowercase letters?");
          if (confirmLower == false) {
            var lowercase = [];   //empties character array 
        }
          else {var finalChar = [].concat(this.finalChar,lowercase);
        }


        var confirmNumeric = confirm("Include numbers (0-9)?");
          if (confirmNumeric == false) {
            var numeric = [];   //empties numeric array 
        }
          else {var finalChar = [].concat(this.finalChar,numeric);
        }


        var confirmSpecial = confirm("Include special characters (! @ # $ %, etc)?");
          if (confirmSpecial == false) {
            var special = [];   //empties special character array 
        }
          else {var finalChar = [].concat(this.finalChar,special);
        }
  
        console.log(this.finalChar); //console.log for Dev Tools to validate above code


//Generate Password with random mix of selected characters

        alert("Your  Password is ready.")

 
    function randomInt(passwordLength) {
      return Math.floor(Math.random() * (passwordLength + 1)); //Includes the password length with +1
      }       
          
    function random(choices) {
      var index = randomInt(choices.length);
      return choices [index]
    }   

    var string = "";

    for (var i = 0; i<= passwordLength; i++) {
      string += random(finalChar);
    }

      alert("New Password = " + (string))
      
      
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;
