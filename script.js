let sizeSlider = document.getElementById("size");

function createGrid(size) {
    let canvas = document.querySelector('.canvas');
    let pixels = canvas.querySelectorAll('div');

    pixels.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let total = sizeSlider.value * sizeSlider.value;
    for (let i = 0; i < total; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', draw);
        pixel.style.backgroundColor = '#FFF';
        canvas.insertAdjacentElement('beforeend', pixel);
    }
}

let submit = document.querySelector('.submit');
let range = document.querySelector('.size');

createGrid(16);

function adjustSize(input) {
        createGrid(input);     
}

function draw() {
    this.style.backgroundColor = 'black';
}