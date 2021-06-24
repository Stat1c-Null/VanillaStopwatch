window.onload = function () { // as soon as page loads up, run function
    let minutes = 00
    let seconds = 00
    let tens = 00
    let appendMinutes = document.getElementById("minutes")
    let appendSeconds = document.getElementById("seconds")
    let appendTens = document.getElementById("tens")
    let buttonStart = document.getElementById("start")
    let buttonStop = document.getElementById("stop")
    let buttonReset = document.getElementById("reset")
    let Interval // stopwatch timer

    // start button
    buttonStart.onclick = function () {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    // stop button
    buttonStop.onclick = function () {
        clearInterval(Interval)
    }

    // reset button
    buttonReset.onclick = function () {
        clearInterval(Interval)
        minutes = "00"
        seconds = "00"
        tens = "00"
        appendMinutes.innerHTML = minutes
        appendSeconds.innerHTML = seconds
        appendTens.innerHTML = tens
    }

    function startTimer() {
        tens++ //Add 1 all the time

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens
        }

        if (tens > 9){
            appendTens.innerHTML = tens
        }

        if (tens > 99){
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0//Reset milliseconds\
            appendTens.innerHTML = "0" + 0
        }

        if (seconds <= 9){
            appendSeconds.innerHTML = "0" + seconds
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if (seconds > 59){
            minutes++
            appendMinutes.innerHTML = "0" + minutes
            seconds = 0
            appendSeconds.innerHTML = "0" + 0
        }
    }
}