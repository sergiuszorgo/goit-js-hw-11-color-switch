const body = document.body;
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

startBtnRef.addEventListener('click', startСhangingСolor)
stopBtnRef.addEventListener('click', stoptСhangingСolor)

function startСhangingСolor() {
    console.log('start');
};

function stoptСhangingСolor() {
    console.log('stop');
};
