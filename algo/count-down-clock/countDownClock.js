// make a countdown that takes in a number of seconds and counts the time down to zero + prints the time at which time will be up. 

function countDownClock(seconds) {
    let countDown;
    const timeAtStart = Date.now();
    const timeAtEnd = timeAtStart + seconds * 1000
    
    // show time remaining at start
    showTimeLeft(seconds);
    // show when clock will hit 0:00
    timeIsUpAt(timeAtEnd); 

    // in case function called multiple times...
    clearInterval(countDown)

    countDown = setInterval(() => {
       let secondsLeft = Math.round((timeAtEnd - Date.now()) / 1000);
       
       // stop clock at 0:00
       if(secondsLeft < 0) {
          clearInterval(countDown);
          console.log('BANG?')
          return;
       }
       showTimeLeft(secondsLeft) 
    }, 1000);
}

function showTimeLeft(seconds) {
    const minutesLeft = Math.floor(seconds / 60); 
    const secondsLeft = seconds % 60; 
    console.log(`${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`);
}

function timeIsUpAt(timestamp) {
    const crunchTime = new Date(timestamp)
    const hour = crunchTime.getHours();
    const minutes = crunchTime.getMinutes();
    const seconds = crunchTime.getSeconds();
    console.log(`Time will be up at: ${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
}

countDownClock(111)