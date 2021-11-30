var elemImage = document.getElementById("ozzy");

document.getElementById("square-btn").addEventListener("click", function() {
    setBorderShape('none');
});

document.getElementById("rounded-btn").addEventListener("click", function() {
    setBorderShape('rounded');
});

document.getElementById("circle-btn").addEventListener("click", function() {
    setBorderShape('circle');
});

document.getElementById("noframe-btn").addEventListener("click", function() {
    setFrameStyle('none');
});

document.getElementById("gold-btn").addEventListener("click", function() {
    setFrameStyle('gold');
});

document.getElementById("black-btn").addEventListener("click", function() {
    setFrameStyle('black');
});

function setBorderShape(shape) {
    if (elemImage !== null) {

        // Remove the current border shape
        if (elemImage.classList.contains("rounded-3")) {
            elemImage.classList.remove("rounded-3");
        }
        if (elemImage.classList.contains("rounded-circle")) {
            elemImage.classList.remove("rounded-circle");
        }

        // Set the new border shape based on the parameter
        if (shape == 'rounded') {
            elemImage.classList.add("rounded-3");
        } else if (shape == 'circle') {
            elemImage.classList.add("rounded-circle");
        }
    }
}

function setFrameStyle(fStyle) {
    if (elemImage !== null) {

        // Remove the current border shape
        if (elemImage.classList.contains("gold-frame")) {
            elemImage.classList.remove("gold-frame");
        }
        if (elemImage.classList.contains("black-frame")) {
            elemImage.classList.remove("black-frame");
        }

        // Set the new border shape based on the parameter
        if (fStyle == 'gold') {
            elemImage.classList.add("gold-frame");
        } else if (fStyle == 'black') {
            elemImage.classList.add("black-frame");
        }

    }
}
