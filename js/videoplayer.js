function loadVideo(id) {
    "use strict";
    var video = document.getElementById('video');
    var mp4 = document.getElementById('mp4');

    mp4.src = "Video/" + id;

    video.load();
    video.play();
}