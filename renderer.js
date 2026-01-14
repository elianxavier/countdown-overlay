const { ipcRenderer } = require("electron");

const setupView = document.getElementById("setup-view");
const timerView = document.getElementById("timer-view");
const targetInput = document.getElementById("target-time");
const countdownEl = document.getElementById("countdown");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

let timerInterval;

let isMouseDown = false;
let startX = 0;
let startY = 0;
let hasDragged = false;

document.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return;

  isMouseDown = true;
  hasDragged = false;
  startX = e.screenX;
  startY = e.screenY;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const deltaX = e.screenX - startX;
    const deltaY = e.screenY - startY;

    if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
      hasDragged = true;
      ipcRenderer.send("window-move", { x: deltaX, y: deltaY });

      startX = e.screenX;
      startY = e.screenY;
    }
  }
});

const now = new Date();
now.setMinutes(now.getMinutes() + 45);
targetInput.value = now.toTimeString().substring(0, 5);

btnStart.addEventListener("click", (e) => {
  if (hasDragged) {
    e.preventDefault();
    return;
  }

  const targetValue = targetInput.value;
  if (!targetValue) return;

  const [h, m] = targetValue.split(":");
  const now = new Date();
  const targetDate = new Date();
  targetDate.setHours(h);
  targetDate.setMinutes(m);
  targetDate.setSeconds(0);

  if (targetDate <= now) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  startTimer(targetDate);
});

btnStop.addEventListener("click", (e) => {
  if (hasDragged) {
    e.preventDefault();
    return;
  }

  clearInterval(timerInterval);
  setupView.style.display = "flex";
  timerView.style.display = "none";
});

function startTimer(targetDate) {
  setupView.style.display = "none";
  timerView.style.display = "flex";
  updateTimer(targetDate);

  timerInterval = setInterval(() => {
    updateTimer(targetDate);
  }, 1000);
}

function updateTimer(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timerInterval);
    countdownEl.innerText = "00:00";
    return;
  }

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (hours > 0) {
    countdownEl.innerText = `${hours}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  } else {
    countdownEl.innerText = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }
}
