window.addEventListener('mousemove', function (event) {
    const parallaxContainer = document.body;
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    parallaxContainer.style.backgroundPositionX = mouseX * 0.05 + 'px';
    parallaxContainer.style.backgroundPositionY = mouseY * 0.05 + 'px';
});