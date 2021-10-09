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
  var rollSound = new Audio();
  var diceColorObj = document.getElementById("diceColorList");
  var diceColor;
  
  
  //set dice color variable
  diceColor = diceColorObj.value.toString();

  

  // Determine source for roll sound file
  rollSound.src = "audio/rollingdice.wav";

  //play the audio file
  rollSound.play();


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

      //Displays max of all rolls
      resultMax = ((diceCount * diceSize) + (diceCount * rollEnhancement));
      messageMax = "The max of all dice rolled is: " + resultMax;

      
      //Displays average of all rolls
      resultAverage = ((((diceSize + 1) / 2) * diceCount) + (diceCount * rollEnhancement));
      messageAverage = "The average of all dice rolled is: " + resultAverage;

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

      
      // sets the dice color based on the User's selection
      if (diceColor == "white") { 
        //Show die depending on the size the user chooses
        if (diceSize === 4) {
          document.getElementById("d4ImageLight").style.visibility = "visible";
        } else if (diceSize === 6) {
          document.getElementById("d6ImageLight").style.visibility = "visible";
        } else if (diceSize === 8) {
          document.getElementById("d8ImageLight").style.visibility = "visible";
        } else if (diceSize === 10) {
          document.getElementById("d10ImageLight").style.visibility = "visible";
        } else if (diceSize === 12) {
          document.getElementById("d12ImageLight").style.visibility = "visible";
        } else if (diceSize === 20) {
          document.getElementById("d20ImageLight").style.visibility = "visible";
        }
      } else if (diceColor == "black") {
        //Show die depending on the size the user chooses
        if (diceSize === 4) {
          document.getElementById("d4ImageDark").style.visibility = "visible";
        } else if (diceSize === 6) {
          document.getElementById("d6ImageDark").style.visibility = "visible";
        } else if (diceSize === 8) {
          document.getElementById("d8ImageDark").style.visibility = "visible";
        } else if (diceSize === 10) {
          document.getElementById("d10ImageDark").style.visibility = "visible";
        } else if (diceSize === 12) {
          document.getElementById("d12ImageDark").style.visibility = "visible";
        } else if (diceSize === 20) {
          document.getElementById("d20ImageDark").style.visibility = "visible";
        }
      }
    }
  } else {
    //Focuses mouse to text box
    rollCountObj.focus();
    messageResultTextObj.innerHTML = "Please enter a positive integer value e.g. 1, 2, 3 \n Other types of numbers are not accepted";

  }
}

function userLogin() {
   
  var username = "";
  var password = "";
  var usernameLength = "";
  var passwordLength = "";
 
  username = document.getElementById("userUsername");
  password = document.getElementById("userPassword");
 
  usernameLength = username.length;
  passwordLength = password.length;
 
  if (usernameLength >= 12 && passwordLength >= 12) {
      window.location="index.html";
   }   else {
       alert("Please make sure that the username and password you have entered are at least 12 characters long.");
   }
 }


