let buttons = document.querySelectorAll("button");
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let minuteInpute = document.querySelector("input");
let timeInterval;

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
    if (this.minuteValue > 0) {
      this.minuteValue - 1;
      this.secondValue = 60;
    } else {
      if (this.hourValue > 0) {
        this.hourValue--;
        this.minuteValue = 59;
        this.secondValue = 60;
      } else {
        clearInterval(timeInterval);
      }
    }
  },
  countdonwOperation: function () {
    this.countDownStart();
    timeInterval = setInterval(function () {
      if (theTimer.secondValue > 0) {
        theTimer.secondValue - 1;
        if ((theTimer.secondValue = 0)) {
          theTimer.minuteValue--;
        }
      } else {
        if (theTimer.minuteValue > 0) {
          theTimer.minuteValue--;
          theTimer.secondValue = 60;
        } else {
          clearInterval(timeInterval);
        }
      }
      theTimer.timeShow();
    }, 1000);
  },
};

buttons[0].addEventListener("click", function () {
  if (timeInterval == undefined) {
    theTimer.timeDivdor(minuteInpute.value);
    theTimer.countdonwOperation();
  }
});
