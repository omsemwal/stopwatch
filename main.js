// let sec = 0, min = 0, hour = 0;
// let stoptime=true

// for (let i = 0; i <= 3600; i++) {
//     setTimeout(() => {
//         console.log(`Time: ${hour}h:${min}m:${sec}s`);

//         sec++;
//         if (sec == 60) {
//             sec = 0;
//             min++;
//         }
//         if (min == 60) {
//             min = 0;
//             hour++;
//         }
//         if(sec<10){
//             sec="0"+sec;
//         }
//         if(min<10){
//             min="0"+min;
//         }
//         if(hour<10){
//             hour="0"+sec;
//         }
//         TimeRanges.innerHTML= hr + ":" + min + ":" + sec;

//     }, i * 1000);
// }



let sec = 0,
  min = 0,
  hour = 0;
let stoptime = true;
let timerInterval;

function startTimer() {
  if (stoptime) {
    stoptime = false;
    timerInterval = setInterval(() => {
      sec++;
      if (sec == 60) {
        sec = 0;
        min++;
      }
      if (min == 60) {
        min = 0;
        hour++;
      }

      // Format time as 2 digits
      let formattedSec = sec < 10 ? "0" + sec : sec;
      let formattedMin = min < 10 ? "0" + min : min;
      let formattedHour = hour < 10 ? "0" + hour : hour;

      document.getElementById(
        "STOPWATCH"
      ).innerHTML = `${formattedHour}:${formattedMin}:${formattedSec}`;
    }, 1000);
  }
}

function stopTimer() {
  stoptime = true;
  clearInterval(timerInterval);
}

function resetTimer() {
  stoptime = true;
  clearInterval(timerInterval);
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("STOPWATCH").innerHTML = "00:00:00";
}
