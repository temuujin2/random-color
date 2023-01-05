const colors = document.querySelectorAll(".color-box, .text");

function generateColors() {
    colors.forEach((color) => {
        console.log(color)
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        color.style.backgroundColor = hexCode;
        color.innerHTML = hexCode;
    })
}

generateColors();