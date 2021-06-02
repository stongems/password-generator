let generateBtn = document.querySelector("#generate");
let clearForm = document.querySelector("#clear_box");

let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let special = ["!","$","%","&","(",")","*","+","-",".","?",":",";","<","=",">","@"];
let password = "";
let selected = "";

function generatePasswordChoice() {
  let length = parseInt(
    prompt("How long would you like your password to be 8-128?")
  );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("OH NO! Please input a number between 8 and 128, THANK YOU!");
   return generatePasswordChoice();
  }
  

  let addLowerCase = confirm("Add Lower Case?");
  let addUpperCase = confirm("Add Upper Case?");
  let addNumbers = confirm("Add Numbers?");
  let addSpecial = confirm("Add Special Characters?");

  if (!addLowerCase && !addUpperCase && !addNumbers && !addSpecial) {
    return alert("Please select one of the following to generate a password.");
  }
  const passwordChoice = {
    length: length,
    addLowerCase: addLowerCase,
    addUpperCase: addUpperCase,
    addNumbers: addNumbers,
    addSpecial: addSpecial,
  };
  return passwordChoice;
}
function randomSelect(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
}
function generatePassword() {
  var choice = generatePasswordChoice();
  var result = [];
  var pChar = [];
  var gChar = [];
  if (choice.addLowerCase) {
    pChar = pChar.concat(lowerCase);
    gChar.push(randomSelect(lowerCase));
  }
  if (choice.addUpperCase) {
    pChar = pChar.concat(upperCase);
    gChar.push(randomSelect(upperCase));
  }
  if (choice.addNumbers) {
    pChar = pChar.concat(numbers);
    gChar.push(randomSelect(numbers));
  }
  if (choice.addSpecial) {
    pChar = pChar.concat(special);
    gChar.push(randomSelect(special));
  }
  for (let i = 0; i < choice.length; i++) {
    const myChar = randomSelect(pChar);
    result.push(myChar);
  }
  for (let i = 0; i < gChar.length; i++) {
    result[i] = gChar[i];
  }
  return result.join("");
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
