const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

startBtnRef.addEventListener('click', startСhangingСolor)
stopBtnRef.addEventListener('click', stoptСhangingСolor)

let interval = 0;

function startСhangingСolor() {
    startBtnRef.disabled = true;
    interval = setInterval(painter, 1000);
    console.log('start');
};

function stoptСhangingСolor() {
    startBtnRef.disabled = false;
    console.log('stop');
    clearInterval(interval);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function painter() {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(body.style.backgroundColor);
}