let timingDisplay = document.getElementById("timingDisplay");
let timer = null;
let seconds = 0;
let minutes = 0;
function StartStopWatch() {
  seconds++;
  if (seconds == 59) {
    minutes++;
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timingDisplay.innerHTML = m + ":" + s;
}
function Start() {
  if (timer != null) {
    clearInterval(timer);
  } else {
    timer = setInterval(StartStopWatch, 1000);
  }
}
function Pause() {
  clearInterval(timer);
  timer = null;
}
function Reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  timingDisplay.innerHTML = "00:00";
}
