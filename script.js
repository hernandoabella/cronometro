const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval;

let startTimer = () => {
	count++;
	minutes = Math.floor(count / 100 / 60);
	seconds = Math.floor(count / 100 - minutes * 60);
	milliSeconds = Math.floor(count - seconds * 100 - minutes * 6000);

	document.querySelector("#minutes").innerText = addZero(minutes);
	document.querySelector("#seconds").innerText = addZero(seconds);
	document.querySelector("#m-seconds").innerText = addZero(milliSeconds);
};

let addZero = (time) => {
	if (time <= 9) {
		return "0" + time;
	}
	return time;
};

startButton.addEventListener("click", function () {
	if (!interval) {
		interval = setInterval(startTimer, 10);
	}
});

stopButton.addEventListener("click", function () {
	clearInterval(interval);
	interval = null;
});

resetButton.addEventListener("click", function () {
	clearInterval(interval);
	count = 0;
	minutes = 0;
	seconds = 0;
	milliSeconds = 0;
	interval = null;
	document.querySelector("#minutes").innerText = "00";
	document.querySelector("#seconds").innerText = "00";
	document.querySelector("#m-seconds").innerText = "00";
});
