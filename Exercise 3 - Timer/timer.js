console.log("Exercise 3 - Timer");

const result = document.getElementById('result');
const reset = document.getElementById('reset');
const toggle = document.getElementById('toggle');
const AddSubtractTimer = document.querySelectorAll("[data-sec]");

let seconds = 0;
let isCounting = false;
let actionsAllowed = true;

const timer = setInterval(() => {
    if(seconds === 0) resetHandler();
    if(isCounting) result.textContent = `${--seconds}s`;
}, 1000);

function countDownHandler(newIsCounting) {
    if(seconds === 0) return;
    if(!timer) timer();
    isCounting = newIsCounting;
    toggle.innerText = !isCounting ? "Start" : "Stop";
}

function resetHandler() {
    isCounting = false;
    result.textContent = `${seconds = 0}s`;
    toggle.innerText = 'Start';
}

function timerChangeHandler() {
    if(isCounting) return;
    seconds += +this.dataset.sec;
    result.textContent = `${seconds}s`;
}

toggle.addEventListener('click', e => {
    countDownHandler(!isCounting);
});

reset.addEventListener('click', resetHandler);
AddSubtractTimer.forEach(btn => btn.addEventListener('click', timerChangeHandler));