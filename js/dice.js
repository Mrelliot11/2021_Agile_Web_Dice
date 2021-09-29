// Determine variables
var rollNumber = 1;
var diceSize = 6; 
var firstName = "";
var rollResult = 0;
var resultSum = 0;
var message = "";
var index = 1;


function rollDice() {
    //Check to see if roll amounis a valid number
    while (numberValidator(rollNumber)){
    
        alert("The number you have entered for number of rolls is not valid please enter a valid positive number.");
    }

    //Check to see if dice size is a valid number
    while (numberValidator(diceSize)){
    
        alert("The number you have entered for size of dice is not valid please enter a valid positive number.");
    }

    //Repeats while statement based on number selected in inputNumber
    while (index <= rollNumber) {
    //Selects random number between 1 and 6
    rollResult = Math.floor(Math.random() * diceSize) + 1;
    //Displays result of each roll by creating <p> element for each roll
    var tagP = document.createElement("p");
    var resultOutput = document.createTextNode("Roll #" + index + ": " + rollResult);
    var divElement = document.getElementById("diceRolls")
    
    tagP.appendChild(resultOutput);
    divElement.appendChild(tagP);
    
    //Adds the result of each roll to the sum
    resultSum += rollResult;
    //add 1 to index
    index++;
    }
    //Displays sum of all rolls
    message = "The total of all dice rolled is: " + resultSum;

    document.getElementById('messageResultText').innerHTML = message;

}



//Function for number validation
function numberValidator(vNumber) {
  var validNumber = false;
  //Converts input number to a number
  vNumber = Number(vNumber);
  //Check if it is a number
  if (isNaN(vNumber)){
    validNumber = true;
  }
  //Check if input number is an integer
  if (parseFloat(vNumber) != parseInt(vNumber)) {
    validNumber = true;
  }
  // Check to see if it is a positive number
  if (vNumber <= 0) {
    validNumber = true;
  }
  
  return validNumber;
}

// Gets the values for number of times to roll dice
function getRollNumber(objNumberDropDown) { 
    console.log(objNumberDropDown); 
    var rollNumberList = document.getElementById("rollNumberList");  
    rollNumberList.value = objNumberDropDown.value;
    rollNumber = rollNumberList.value;

    }  

// Gets the values for the size of the Dice
function getDiceSize(objDiceDropDown) { 
    console.log(objDiceDropDown); 
    var diceSizeList = document.getElementById("diceSizeList");  
    diceSizeList.value = objDiceDropDown.value;
    diceSize = diceSizeList.value;
    }  

