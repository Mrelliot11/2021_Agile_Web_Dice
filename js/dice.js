function rollDice() {

  // Determine variables
  var diceCount;
  var diceSize = 0;
  var rollResult = 0;
  var resultSum = 0;
  var message = "";
  var index = 1;

  document.getElementById('diceRolls').innerHTML = "";

  //Creating objects from the two selections, number of dice and 
  var rollCountObj = document.getElementById('numberOfDiceInput');
  var rollNumberObj = document.getElementById('diceSizeList');

  //Create object of the message result text
  var messageResultTextObj = document.getElementById('messageResultText');
  //Set dice count and size as numbers
  diceCount = Number(rollCountObj.value);
  diceSize = Number(rollNumberObj.value);

  console.log(diceCount);
  if (Number.isInteger(diceCount) && diceCount != 0) {
    //Repeats while statement based on number selected in inputNumber
    while (index <= diceCount) {
      //Selects random number between 1 and 6
      rollResult = Math.floor(Math.random() * diceSize) + 1;
      //Displays result of each roll by creating <p> element for each roll
      var tagP = document.createElement("p");
      var resultOutput = document.createTextNode("Roll #" + index + ": " + rollResult);
      var divElement = document.getElementById("diceRolls");

      tagP.appendChild(resultOutput);
      divElement.appendChild(tagP);

      //Adds the result of each roll to the sum
      resultSum = resultSum + rollResult;
      //add 1 to index
      index++;
      console.log(resultSum);
      //Displays sum of all rolls
      message = "The total of all dice rolled is: " + resultSum;

      document.getElementById('messageResultText').innerHTML = message;
    }
  } else {
    rollCountObj.focus();
    messageResultTextObj.innerHTML = "Please enter a positive integer value e.g. 1, 2, 3 \n Other types of numbers are not accepted";

  }
}