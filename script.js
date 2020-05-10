// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
document.getElementById("password").onclick = function(){

  confirm("do you want to include numbers?") 
  + generatePassword(prompt("How long do you want your password?") 
  + confirm("Do you want include uppercase letters?")
  + confirm("Do you want to include special character?"))}

for(var i=0; i<= 128; i++) {
  char = symbols.charAt(r.nextInt(symbols.length()));
  if(Character.isUpperCase(ch))
  confirmUpper = true;
  else if(Character.isLowerCase(ch))
      hasLower = true;
  else if(Character.isDigit(ch))
      hasDigit = true;
  else
     specChar = true;
  password[i] = ch;
}
if(hasUpper && hasLower && hasDigit && hasSpecial) {
  return new String(password);
}alert("your new password is" + password)