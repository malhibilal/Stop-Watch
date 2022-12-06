let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = false;

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
  if (timer == true) {
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

  if (milliseconds< 10) {
    document.querySelector("#milliseconds").innerHTML = "0" + milliseconds;
  } else {
    document.querySelector("#milliseconds").innerHTML = milliseconds;
  }

  if (seconds < 10) {
    document.querySelector("#seconds").innerHTML = "0" + seconds;
  } else {
    document.querySelector("#seconds").innerHTML = seconds;
  }
  if (minutes < 10) {
    document.querySelector("#minutes").innerHTML = "0" + minutes;
  } else {
    document.querySelector("#minutes").innerHTML = minutes;
  }
  if (hours < 10) {
    document.querySelector("#hours").innerHTML = "0" + hours;
  } else {
    document.querySelector("#hours").innerHTML = hours;
  }
  setTimeout("runTime()", 10); //metod för att räkna upp tid.
}

function printPausTime () {
   let values = document.querySelectorAll(".display");
   console.log(values);
   values.forEach(function (element) {
/*     document.querySelector(".result").innerHTML = element; */
  });

}

/* 
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => console.log(p)); */