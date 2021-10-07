var totalSum = 0;

function rollDice() {

  // Determine variables
  var diceCount;
  var diceSize = 0;
  var rollResult = 0;
  var resultSum = 0;
  var resultAverage = 0;
  var resultMax = 0;
  var resultMin = 0;
  var message = "";
  var messageAverage = "";
  var messageMax = "";
  var messageMin = "";
  var messageTotal = "";
  var index = 1;
  var rollEnhancement = 0;
  var tagP;
  var resultOutput;
  var divElement;

  //Creating objects from the two selections, number of dice and dice size list
  var rollCountObj = document.getElementById("numberOfDiceInput");
  var rollNumberObj = document.getElementById("diceSizeList");

  //Create variable to get enhancement from user
  var rollEnhancementObj = document.getElementById("diceEnhancementList");

  //Create object of the message result text
  var messageResultTextObj = document.getElementById("messageResultText");

  //Clear diceroll box
  document.getElementById("diceRolls").innerHTML = "";

  //Set dice count and size as numbers
  diceCount = Number(rollCountObj.value);
  diceSize = Number(rollNumberObj.value);

  //Set roll enhancement as a number
  rollEnhancement = Number(rollEnhancementObj.value);

  if (Number.isInteger(diceCount) && diceCount > 0) {
    //Repeats while statement based on number selected in inputNumber
    while (index <= diceCount) {
      //Selects random number between 1 and 6 and adds en
      rollResult = (Math.floor(Math.random() * diceSize) + 1) + rollEnhancement;

      //Displays result of each roll by creating <p> element for each roll
      tagP = document.createElement("p");
      resultOutput = document.createTextNode("Roll #" + index + ": " + rollResult);
      divElement = document.getElementById("diceRolls");
      tagP.appendChild(resultOutput);
      divElement.appendChild(tagP);

      //Adds the result of each roll group to the sum
      resultSum = resultSum + rollResult;

      //add 1 to index
      index = index + 1;

      //Displays sum of all rolls
      message = "The totals of this roll is: " + resultSum;

      //Displays average of all rolls
      resultAverage = ((resultSum / diceCount) + (diceCount * rollEnhancement));
      messageAverage = "The average of each dice rolled is: " + Math.floor(resultAverage + 1);

      //Displays max of all rolls
      resultMax = ((diceCount * diceSize) + (diceCount * rollEnhancement));
      messageMax = "The max of all dice rolled is: " + resultMax;

      //Displays min of all rolls
      resultMin = (diceCount + (diceCount * rollEnhancement));
      messageMin = "The min of all dice rolled is: " + resultMin;
      
      //Adds sum of each roll group to overall sum 
      totalSum = totalSum + rollResult;

      //Displays overall sum of all rolls
      messageTotal = "The overall sum of all rolls is: " + totalSum;
      document.getElementById("messageAllRollsText").innerHTML = messageTotal;

      //Displays each calculation
      document.getElementById("messageResultText").innerHTML = message;
      document.getElementById("messageAverageResultText").innerHTML = messageAverage;
      document.getElementById("messageMaxResultText").innerHTML = messageMax;
      document.getElementById("messageMinResultText").innerHTML = messageMin;
    }
  } else {
    //Focuses mouse to text box
    rollCountObj.focus();
    messageResultTextObj.innerHTML = "Please enter a positive integer value e.g. 1, 2, 3 \n Other types of numbers are not accepted";

  }
}