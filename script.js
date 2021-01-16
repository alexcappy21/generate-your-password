// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase;
var lowercase; 
var number;
var specCharacter; 
var criteria= [];

uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = ["0","1","2","3","4","5","6","7","8","9"];
specCharacter = ["!","@","#","$","%","^","&","*","("];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
 

  passwordText.value = password;
  
  
  
};
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    
     var pass = "";
    var lengthChoice = parseInt(prompt("How long would you like your password? Choose between 8 and 128."));
     var uppercaseConfirm = confirm("Do you want uppercase letters in your password?");
     var lowercaseConfirm = confirm("Do you want lowercase letters in your password?");
     var numberConfirm = confirm("Do you want numbers in your password?");
     var specCharacterConfirm = confirm("Do you want special characters in your password?");
      
      if(!lengthChoice){
        alert("You must choose between 8 and 128 characters.");
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } else if (lengthChoice < 8 || lengthChoice > 128){
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } 
       console.log(lengthChoice);
    
      if(uppercaseConfirm){
        for (var i=0; i < uppercase.length; i++){
          criteria.push(uppercase[i]);
        }
      }
      console.log(uppercaseConfirm);

      if(lowercaseConfirm){
        for (var j=0; j < lowercase.length; j++){
          criteria.push(lowercase[j]);
        }
      }
      console.log(lowercaseConfirm)

      if(numberConfirm){
        for (var k=0; k < number.length; k++){
          criteria.push(number[k]);
        }
      }
      console.log(numberConfirm);

      if (specCharacter){
        for (var l=0; l < specCharacter.length; l++){
          criteria.push(specCharacter[l]);
        }
      }

      if (!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !specCharacterConfirm) {
        alert("You must choose some criteria for your password.");
        return;
        
      } 
      for (var i=0; i < lengthChoice; i++){
        var result= criteria[Math.floor(Math.random() * criteria.length)]
        pass += result;
      }

      return pass;
      
       
    };
    



