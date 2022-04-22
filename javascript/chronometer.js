class Chronometer {
  constructor() {
    currentTime = 0;
    intervalidId = null;
  }

  start() {
    this.intervalidId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
}
  

  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60);
   return minutes;
  }

  getSeconds() {
    let seconds = (this.currentTime % 60);
   return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return '0' + String(value)
    }else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalidId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}



