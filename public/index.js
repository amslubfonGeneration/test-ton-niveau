let colorChangeInterval;

function changeColor() {
    const bars = document.querySelectorAll('.bar');
    let counter = 0;

    colorChangeInterval = setInterval(() => {
        bars.forEach((bar, index) => {
            bar.style.backgroundColor = getRandomColor();
        });
        counter++;
        if (counter >= 10) { // Change color 10 times
            clearInterval(colorChangeInterval);
            resetBars(bars);
        }
    }, 500); // Change every 0.5 seconds
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetBars(bars) {
    bars.forEach((bar) => {
        bar.style.backgroundColor = '#3498db'; // Reset color to the original
    });
}


