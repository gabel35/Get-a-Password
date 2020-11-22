//getting variables from html and creating variables for different options for criteria
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericCase = ['0','1','2','3','4','5','6','7','8','9'];
var symbolCase = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~','<','>','?','/','.',',',':',';','[',']'];
var criteria = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask User the criteria to include in their password
var generatePassword = function passwordCriteria () {
  var selLength = prompt("How long do you want your password to be? (required length: 8-128 characters");
    if (selLength < 8){
      alert("Password needs to be at least 8 characters long");
      passwordCriteria ();
      return;
    }
    else if (selLength > 128){
      alert("Password cannot be longer than 128 characters");
      passwordCriteria ();
      return;
    };
  var selUpper = confirm("Do you want uppercase characters in your password? (recommended)");
    if (selUpper === true){
      criteria.push(upperCase)
    };
  var selLower = confirm("Do you want lowercase characters in your password? (recommended)");
    if (selLower === true){
      criteria.push(lowerCase)
    };
  var selNumeric = confirm("Do you want numbers in your password? (recommended)");
    if (selNumeric === true){
      criteria.push(numericCase)
    };
  var selSymbol = confirm("Do you want special characters in your password? (recommended)");
    if (selSymbol === true){
      criteria.push(symbolCase)
    };

  console.log(criteria)

  // Validate that at least one criterion will be included in the password
  var countCriteria = selUpper + selLower + selNumeric + selSymbol;
  var typesCriteria = [{selUpper}, {selLower}, {selNumeric}, {selSymbol}].filter(item =>Object.values(item)[0]);
  console.log('countCriteria: ', countCriteria);
  console.log('typesCriteria: ', typesCriteria);
    
  if(countCriteria === 0){
    alert("Please select at least 1 criterion to include in your password");
    passwordCriteria ();
    return;
  }
}

    // for(let i = 0; i < length; i += countCriteria){
    //   typesCriteria.forEach(type => {
    //     var criteriaSeriesName = Object.keys(type)[0];
    //     console.log('criteria: ', criteriaSeriesName);

    //     generatePassword += randomCriteriaSeries[criteriaSeriesName]();
      // });
    // }

// function getRandomUpper() {
//     return String.upperCase(Math.floor(Math.random() * 26) +1);
// }
// function getRandomLower() {
//   return String.lowerCase(Math.floor(Math.random() * 26) +1);
// }
// function getRandomNumeric() {
//   return String.numericCase(Math.floor(Math.random() * 26) +1);
// }
// function getRandomSymbol() {
//   return String.symbolCase(Math.floor(Math.random() * 26) +1);
// }

// console.log(randomUpper);

// console.log(lowerCase);
// console.log(upperCase);
// console.log(numericCase);
// console.log(symbolCase);


// WHEN I click the button to generate a password
// X   THEN I am presented with a series of prompts for password criteria
// X   WHEN prompted for password criteria
// X   THEN I select which criteria to include in the password
// X   WHEN prompted for the length of the password
// X   THEN I choose a length of at least 8 characters and no more than 128 characters
// X   WHEN prompted for character types to include in the password
// X   THEN I choose lowercase, uppercase, numeric, and/or special characters
// X   WHEN I answer each prompt
// X   THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// passwordDisplayElement.textContent = passwordDisplay