// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var charsLowerCase = 'abcdefghijklmnopkrstuvwxyz'
var charsUpperCase = charsLowerCase.toUpperCase()
var charsNumbers = '0123456789'
var charSpecial = '!@#$%^&*()_+'

// Write password to the #password input

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var userInput = prompt('Choose a number between 8 and 128')

  if (userInput < 8 || userInput > 128){
    alert('Please choose a number between 8 and 128')
    return generatePassword()
  }
  
  if (userInput >= 8 || userInput <= 128){
    var lowerCase = confirm('Do you want lowercase letters?')
    var upperCase = confirm('Do you want uppercase letters?')
    var numberInput = confirm('Do you want numbers?')
    var special = confirm('Do you want special characters?')

    if (!lowerCase&&!upperCase&&!numberInput&&!special){      
      alert('Please choose atleast one')
      return generatePassword()
    }
  }

  var charTypeChoice =(lowerCase ? charsLowerCase : '')
                     +(upperCase ? charsUpperCase : '')
                     +(numberInput ? charsNumbers : '')
                     +(special ? charSpecial : '')

  var password = ''
  for (i=0; i<userInput; i++){
    var charRandomizer = Math.floor(Math.random() * charTypeChoice.length)
    password += charTypeChoice[charRandomizer]
  }
  return password
}  


