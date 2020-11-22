//getting variables from html and creating variables for different options for criteria
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var selLength = document.getElementById(selLength);

var upperCase = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericCase = ['0','1','2','3','4','5','6','7','8','9'];
var symbolCase = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~','<','>','?','/','.',',',':',';','[',']'];
var criteria = [];
var criteriaExpand = document.getElementById(criteriaExpand)

// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask User the criteria to include in their password
var generatePassword = function () {
  var selLength = parseFloat(prompt("How long do you want your password to be? (required length: 8-128 characters"));
    if (selLength < 8){
      alert("Password needs to be at least 8 characters long");
      generatePassword ();
      return;
    }
    else if(selLength > 128){
      alert("Password cannot be longer than 128 characters");
      generatePassword ();
      return;
    };
    console.log(selLength);
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

  console.log(criteria);

  // Validate that at least one criterion will be included in the password
  var countCriteria = selUpper + selLower + selNumeric + selSymbol;
  var typesCriteria = [{selUpper}, {selLower}, {selNumeric}, {selSymbol}].filter(item =>Object.values(item)[0]);
  console.log('countCriteria: ', countCriteria);
  console.log('typesCriteria: ', typesCriteria);
    
    var criteriaExpand = [].concat.apply([], criteria);
    console.log(criteriaExpand);


  if(countCriteria === 0){
    alert("Please select at least 1 criterion to include in your password");
    generatePassword ();
    return;
  };
  
  // var choosenLength = selLength.value;
  //   for (var i = 0; i < [choosenLength]; i++) {
  //    var generatePassword = criteriaExpand[Math.floor(Math.random()*criteriaExpand.length)];
  //   }
}