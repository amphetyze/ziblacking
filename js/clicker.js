const button = document.querySelector('.hero__clicker-button');
let result = document.getElementById('clicker-result');
let stats = document.querySelector('.hero__clicker-stats');
let currentCount = 0;

button.addEventListener('click', updateResult);

function updateResult() {
    currentCount += 1;
    result.textContent = currentCount;

    // Trigger the animation
    stats.style.animation = 'none'; // Reset the animation
    void stats.offsetWidth; // Trigger a reflow to restart the animation
    stats.style.animation = 'heartbeat .1s linear';
}