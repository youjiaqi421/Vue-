function Countdown(time) {

    if (time > 0) {
        let timer = setInterval(() => { time--; }, 1000)
    } else {
        clearInterval()
    }
}

export Countdown;