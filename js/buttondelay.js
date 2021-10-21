// Function to disable the button for 10 seconds
function buttonDelay(id){
    document.getElementById("rollButton").disabled = true;
    setTimeout(function(){document.getElementById("rollButton").disabled = false;},10100);
}


