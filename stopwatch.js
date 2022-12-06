let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = false;
let stopTimes = [];

function startTime() {
  timer = true;
  runTime();
}

function pausTime() {
  timer = false;
  printPausTime();
}

function resetTime() {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.querySelector("#milliseconds").innerHTML = "000";
  document.querySelector("#seconds").innerHTML = "00";
  document.querySelector("#minutes").innerHTML = "00";
  document.querySelector("#hours").innerHTML = "00";
}

function runTime() {
  if (timer) {
    milliseconds++;
  }

  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  document.querySelector("#milliseconds").innerHTML = twoDigits(milliseconds);
  document.querySelector("#seconds").innerHTML = twoDigits(seconds);
  document.querySelector("#minutes").innerHTML = twoDigits(minutes);
  document.querySelector("#hours").innerHTML = twoDigits(hours);

  setTimeout("runTime()", 10); //metod för att räkna upp tid.
}

function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number.toString();
  }
}

function printPausTime() {
  let str = "The times is: ";

  let timeStr = `${str} ${twoDigits(hours)} ${twoDigits(minutes)} ${twoDigits(seconds)} ${twoDigits(milliseconds)}`;

  stopTimes.push(timeStr);
  console.log(stopTimes);

  

 /*  for (let i = 0; i <= stopTimes.length; i++) { */
document.querySelector(".result").innerHTML = stopTimes;

 /*  } */
}
