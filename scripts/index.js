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
    }
    this.timeShow();
  },
  countdonwOperation: function () {
    this.countDownStart();
    timeInterval = setInterval(function () {
      if (minuteInpute.value >= 1) {
        console.log("first IF");
        if (theTimer.secondValue) {
          console.log("seccond IF");
          theTimer.secondValue--;
          if (theTimer.secondValue == 0) {
            console.log("Third IF");
            if (theTimer.minuteValue >= 1) {
              theTimer.minuteValue--;
              theTimer.secondValue = 60;
              theTimer.timeShow();
            } else if (theTimer.hourValue >= 1) {
              this.hourValue--;
              this.minuteValue = 60;
              this.minuteValue--;
              this.secondValue = 60;
            } else {
              clearInterval(timeInterval);
              timeInterval = undefined;
            }
          }
          theTimer.timeShow();
        }
      } else {
        console.log("Else");
      }
    }, 1000);
  },
};

buttons[0].addEventListener("click", function () {
  if (timeInterval == undefined) {
    theTimer.timeDivdor(minuteInpute.value);
    theTimer.countdonwOperation();
  }
});
buttons[1].addEventListener("click", function () {
  if (timeInterval != undefined) {
    clearInterval(timeInterval);
  }
});
