var video = document.getElementById("player1");
var volText = document.getElementById("volume").innerHTML;
var mtd = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Autoplay: off");
	video.loop = false;
	console.log("Video Loop: off");
});

document.getElementById("play").addEventListener("click", function() {
	var volInf = document.getElementById("volume");
	volInf.innerHTML = volText;
	console.log("Play Video");
	video.play();
	volInf.innerHTML += document.getElementById("slider").value;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime >= 10) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Skip 10 seconds");
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	var volInf = document.getElementById("volume");
	volInf.innerHTML = volText;
	var val = document.getElementById("slider").value;
	volInf.innerHTML += val;
	console.log("Volume is ", val);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = 'oldSchool';
	console.log("Old School style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("No style");
});


