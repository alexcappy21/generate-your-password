// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase;
var lowercase; 
var number;
var specCharacter; 


uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = ["0","1","2","3","4","5","6","7","8","9"];
specChar = ["!","@","#","$","%","^","&","*","("];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
 
  passwordText.value = password;  
  
};
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    
    var pass = "";
    var criteria= [];
    var lengthChoice = parseInt(prompt("How long would you like your password? Choose between 8 and 128."));
    var uppercaseConfirm = confirm("Do you want uppercase letters in your password?");
    var lowercaseConfirm = confirm("Do you want lowercase letters in your password?");
    var numberConfirm = confirm("Do you want numbers in your password?");
    var specCharConfirm = confirm("Do you want special characters in your password?");
    
      if(!lengthChoice){
        alert("You must choose between 8 and 128 characters.");
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } else if (lengthChoice < 8 || lengthChoice > 128){
        lengthChoice = parseInt(prompt("Please choose between 8 and 128."));
      } 
    
      if(uppercaseConfirm == true){
        for (var x=0; x < uppercase.length; x++){
          criteria.push(uppercase[x]);
        }
      } 
      
      if(lowercaseConfirm == true){
        for (var x=0; x < lowercase.length; x++){
          criteria.push(lowercase[x]);
        }
      }
      
      if(numberConfirm == true){
        for (var x=0; x < number.length; x++){
          criteria.push(number[x]);
        }
      }
      
      if (specCharConfirm == true){
        for (var x=0; x < specChar.length; x++){
          criteria.push(specChar[x]);
        }
      }

      if (!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !specCharConfirm) {
        alert("You must choose some criteria for your password.");
        return;
      } 

      for (var x=0; x < lengthChoice; x++){
        var result= criteria[Math.floor(Math.random() * criteria.length)]
        pass += result;
        console.log(criteria);
      }

      return pass; 
      
    };
    

    

    
    



