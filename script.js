// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase;
var lowercase; 
var number;
var specCharacter; 
var criteria;

uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = ["0","1","2","3","4","5","6","7","8","9"];
specCharacter = ["!","@","#","$","%","^","&","*","("];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
 

  passwordText.value = password;
  
};
 console.log(this);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    
     var lengthChoice = parseInt(prompt("How long would you like your password? Choose between 8 and 128."));
      
      if(!lengthChoice){
        alert("You must choose between 8 and 128 characters.");
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } else if (lengthChoice < 8 || lengthChoice > 128){
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } 
       console.log(lengthChoice);
    
  
    uppercaseConfirm = confirm("Do you want uppercase letters in your password?");
      if(uppercaseConfirm){
        criteria= uppercase;
      }
      console.log(uppercaseConfirm);

    lowercaseConfirm = confirm("Do you want lowercase letters in your password?");
      if(lowercaseConfirm){
        criteria = lowercase;
      }
      console.log(lowercaseConfirm)

    numberConfirm = confirm("Do you want numbers in your password?");
      if(numberConfirm){
      criteria = number;
      }
      console.log(numberConfirm);

    specCharacterConfirm = confirm("Do you want special characters in your password?");
      if (!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !specCharacterConfirm) {
        alert("You must choose some criteria for your password.");
      } else if (uppercaseConfirm || lowercaseConfirm || numberConfirm || specCharacterConfirm){
        alert("You have chosen your password criteria.")
      } else {
        criteria = specCharacter;
      };
      console.log(specCharacterConfirm);
      console.log(criteria);


     Math.floor(Math.random() * lengthChoice.length + criteria); 
    };



