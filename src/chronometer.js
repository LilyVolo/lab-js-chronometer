class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(!printTimeCallback){
      } else {
        printTimeCallback()
      }

    }, 10);
  }

  getMinutes() {
    let res = Math.floor(this.currentTime/6000)
    return res
  
  }

  getSeconds() {
    let sec = Math.floor(this.currentTime/100%60)
    console.log(sec, 'sec')
    return  sec
  }

  computeTwoDigitNumber(value) {

    let res = value.toString().padStart(2, '0')
    return res
  }
  getCentiseconds() {
    return this.currentTime%100
  }

  stop() {
    return clearInterval(this.intervalId)


  reset() {
    this.currentTime = 0
  }


  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
}
}
