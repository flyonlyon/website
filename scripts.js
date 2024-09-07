// Check to see if the DOM is already loaded, and run the rest of our code once it is
if (document.readyState === "complete" || document.readyState === "interactive") {
    runAfterDOMLoaded();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        runAfterDOMLoaded();
    });
}

function runAfterDOMLoaded() {
    
    // Fading background
    let currentBackgroundIndex = 0;
    const background = document.querySelector('#background');
    const images = [
        "url(Assets/Images/Space1.png)", 
        "url(Assets/Images/Space2.png)"
    ];

    function setBackground() {
        background.style.backgroundImage = images[currentBackgroundIndex];
        currentBackgroundIndex = (currentBackgroundIndex + 1) % images.length;
    }

    setBackground();
    setInterval(setBackground, 1500);
}
