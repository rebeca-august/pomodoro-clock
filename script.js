const timerBtn = document.querySelector(".timer");
const tomatoBtn = document.querySelector(".tomato");
const shortBreakBtn = document.querySelector(".short-break");
const longBreakBtn = document.querySelector(".long-break");
const resetBtn = document.querySelector(".reset");
const audioCheering = document.querySelector("#audio-cheering");
const audioGong = document.querySelector("#audio-gong");
const audioPew = document.querySelector("#audio-pew");

const playAudio = (sound) => sound.play();

let intervalId = 0;

const updateTimer = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const displayMinutes = minutes.toString().padStart(2, "0");
    const displayedSeconds = seconds.toString().padStart(2, "0");

    timerBtn.innerHTML = `${displayMinutes}:${displayedSeconds}`;
};


const setTimer = (duration, sound) => {
    updateTimer(duration);

    intervalId = setInterval(() => {
        duration = duration - 1;
        updateTimer(duration);

        if (duration === 0) {
            resetTimer();
            playAudio(sound);
        }
    }, 1000);
};

tomatoBtn.addEventListener("click", () => {
    resetTimer();
    setTimer(1500, audioCheering);
});

shortBreakBtn.addEventListener("click", () => {
    resetTimer();
    setTimer(300, audioPew);
});

longBreakBtn.addEventListener("click", () => {
    resetTimer();
    setTimer(900, audioGong);
});

const resetTimer = () => {
    clearInterval(intervalId);
    timerBtn.innerHTML = "00:00";
};

resetBtn.addEventListener("click", resetTimer);

