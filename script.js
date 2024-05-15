


const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
    // [ startTime = Date.now() - elapsedTime ]    👇
    //it sets the "startTime" to the "current time"(that is Date.now()) minus the "elapsed time". 
    //This ensures that if the stopwatch was paused and then started again, it resumes from where it left off.

        startTime = Date.now() - elapsedTime; //  (🌟)       
        timer = setInterval(update, 10);//increase from 10 to 1000 when seeing console
        isRunning = true;



        //  (🌟) the "startTime" is constant, but the "current time"(Date.now()) change time to time
        console.log(startTime)
        console.log(Date.now())
        console.log(elapsedTime)
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {

    //Date.now() --> it means current time
    elapsedTime = Date.now() - startTime;//  (🌟)

    //logic part
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    //for display part
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    




    // (🌟) the "startTime" is constant, but the "current time"(Date.now()) change time to time
    // (🌟) If you forget how the logic is working then see the console
        console.log(`now${startTime}`)
        console.log(Date.now())
        console.log(elapsedTime)
}