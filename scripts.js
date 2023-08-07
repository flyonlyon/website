// Initializes our page upon load
window.onload = function() { 
    changeHues();
} // window.onload

function changeHues() {
    changeSize(document.getElementById("green"));
    changeSize(document.getElementById("purple"));
    changeSize(document.getElementById("brown"));
} // changeHues()

// Randomly the size of the hue circles
function changeSize(circle) {
    var change = Math.random() - 0.5;
    circle.style.width += change;
    circle.style.height += change;
    circle.style.paddingTop -= change;
    circle.style.paddingLeft -= change;
} // changeSize