console.log("Exercise 3 - Timer");

const result = document.getElementById('result');
const reset = document.getElementById('reset');
const toggle = document.getElementById('toggle');
const AddSubtractTimer = document.querySelectorAll("[data-sec]");

let seconds = 0;
let isCounting = false;
let actionsAllowed = true;

const timer = setInterval(() => {
    if(seconds === 0) {
        isCounting = false;
        resetHandler();
    }
    if(isCounting) result.textContent = `${--seconds}s`;
}, 1000);

function countDownHandler(newIsCounting) {
    if(seconds <= 0) return resetHandler();
    if(!timer) timer();
    isCounting = newIsCounting;
    AddSubtractTimer.forEach(btn => btn.classList.toggle('active'));
    reset.classList.toggle('active');
    toggle.innerText = !isCounting ? "Start" : "Stop";
}

function resetHandler() {
    if(isCounting) return
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