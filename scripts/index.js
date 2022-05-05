let buttons = document.querySelectorAll("button");
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let minuteInpute = document.querySelector("input");
let timeInterval;
let tt;

let theTimer = {
  secondValue: 0,
  minuteValue: 0,
  hourValue: 0,
  timeDivdor: function (inputValue) {
    this.hourValue = Math.floor(Number(inputValue) / 60);
    this.minuteValue = Math.floor(
      (Number(inputValue) / 60 - this.hourValue) * 60
    );
  },
  timeShow: function () {
    if (this.secondValue <= 9) {
      second.innerHTML = "0" + this.secondValue;
    } else {
      second.innerHTML = this.secondValue;
    }
    if (this.minuteValue <= 9) {
      minute.innerHTML = "0" + this.minuteValue;
    } else {
      minute.innerHTML = this.minuteValue;
    }
    if (this.hourValue <= 9) {
      hour.innerHTML = "0" + this.hourValue;
    } else {
      hour.innerHTML = this.hourValue;
    }
  },
  countDownStart: function () {
    if (Number(minuteInpute.value >= 1)) {
      if (this.minuteValue >= 1) {
        this.minuteValue--;
        this.secondValue = 60;
      } else {
        if (this.hourValue >= 1) {
          this.hourValue--;
          this.minuteValue = 60;
          this.minuteValue--;
          this.secondValue = 60;
        }
      }
    } else {
      alert("کمتر از عدد 1 پذیرفته نمیشود.");
      location.reload();
    }
    this.timeShow();
  },
  countDown: function () {
    if (minuteInpute.value >= 1) {
      if (theTimer.secondValue) {
        theTimer.secondValue--;
        if (theTimer.secondValue == 0) {
          if (theTimer.minuteValue >= 1) {
            theTimer.minuteValue--;
            theTimer.secondValue = 60;
          } else if (theTimer.hourValue >= 1) {
            theTimer.hourValue--;
            theTimer.minuteValue = 60;
            theTimer.minuteValue--;
            theTimer.secondValue = 60;
          } else {
            clearInterval(timeInterval);
            timeInterval = undefined;
          }
        }
        theTimer.timeShow();
      }
    } else {
      clearInterval(timeInterval);
      timeInterval = undefined;
    }
  },
  countdonwOperation: function () {
    this.countDownStart();
    timeInterval = setInterval(this.countDown, 1000);
  },
};

buttons[0].addEventListener("click", function () {
  if (timeInterval == undefined) {
    theTimer.timeDivdor(minuteInpute.value);
    theTimer.countdonwOperation();
  }
});
buttons[1].addEventListener("click", function () {
  console.log(timeInterval);
  if (timeInterval != undefined) {
    if (buttons[1].innerHTML == "Stop") {
      clearInterval(timeInterval);
      buttons[1].innerHTML = "Continue";
    } else if (buttons[1].innerHTML == "Continue") {
      timeInterval = setInterval(theTimer.countDown, 1000);
      buttons[1].innerHTML = "Stop";
    }
  }
});
buttons[2].addEventListener("click", function () {
  location.reload();
});
