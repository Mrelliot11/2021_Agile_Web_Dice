/*jslint browser: true*/

//Define variables
var volume = "";
var backgroundAudio = "";
var backgroundVolumeSlider = "";

/*
Credits for the background music

Slow Grind by Ron Gelinas Chillout Lounge | https://soundcloud.com/atmospheric-music-portal
Creative Commons Attribution 3.0 Unported License
https://creativecommons.org/licenses/by/3.0/deed.en_US
Music promoted by https://www.chosic.com/free-music/all/
*/

//Plays the background music as soon as someone opens the diceroll page
backgroundAudio = new Audio();
backgroundAudio.src = "audio/ron-gelinas-chillout-lounge-slow-grind.mp3";
backgroundAudio.volume = 0.05;
backgroundAudio.play();

//Allows the user to change the volume of the background music
backgroundVolumeSlider = document.getElementById("backgroundVolume-control");
backgroundVolumeSlider.addEventListener("mousemove", setBackgroundVolume);

function setBackgroundVolume() {
    backgroundAudio.volume = backgroundVolumeSlider.value / 100;
}
