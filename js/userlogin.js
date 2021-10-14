/*jslint browser: true*/
/*global window */

function userLogin() {
    "use strict";
    var username = "";
    var password = "";
    var currentWindow = window;

    username = document.getElementById("userUsername");
    password = document.getElementById("userPassword");

    if (username.length >= 12 && password.length >= 12) {
        currentWindow.location.href = "index.html";
    } else {
        window.alert("Please make sure that the username and password you have entered are at least 12 characters long.");
    }
}