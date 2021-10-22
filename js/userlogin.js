/*jslint browser: true*/
/*global window */
/*devel: true*/

function userLogin() {
    "use strict";

    var username = document.getElementById('userUsername').value;

    var currentWindow = window;

        //setting cookie for the browsing session
    document.cookie = "username=" + username;
    currentWindow.location.href = "diceroll.html";
}