const button = document.querySelector('.hero__clicker-button');
let result = document.getElementById('clicker-result');
let currentCount = 0;

button.addEventListener('click', updateResult);

function updateResult() {
    currentCount += 1;
    result.textContent = currentCount;
}