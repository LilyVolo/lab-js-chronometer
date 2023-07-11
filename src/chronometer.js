class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
      if(typeof printTimeCallback === 'function') {
        printTimeCallback()
      }

    } , 1000  );
   //return this.intervalId   
  }

  getMinutes() {
    let res = Math.floor(this.currentTime/60)
    return res
  
  }

  getSeconds() {
    let sec = this.currentTime%60
    console.log(sec, 'sec')
    return  sec
  }

  computeTwoDigitNumber(value) {

    let res = value.toString().padStart(2, '0')
    return res
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let localTime=  this.currentTime
    console.log(this.currentTime, 'split')
    let cenSec = localTime/100
    

   
    return  milSec
    }
    // localTime=0
    // 1 centisecond = 10 milliseconds

//1 second = 100 centiseconds = 1000 milliseconds
  
}
