const canvas = document.querySelector('.canvas');
const sizeSlider = document.getElementById("size");
const color = document.querySelector(".color");
const reset = document.querySelector(".reset");
let brushDown = false;

function createGrid(size) {
    let pixels = canvas.querySelectorAll('div');

    pixels.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let total = sizeSlider.value * sizeSlider.value;
    for (let i = 0; i < total; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', draw);
        pixel.addEventListener('click', function(){
            pixel.style.backgroundColor = color.value;
        });
        pixel.style.backgroundColor = '#FFF';
        canvas.insertAdjacentElement('beforeend', pixel);
    }
}

window.addEventListener("mousedown", function(){
    return brushDown = true})
window.addEventListener("mouseup", function(){
    return brushDown = false})

createGrid(16);

function adjustSize(input) {
        createGrid(input);     
}

function draw() {
    if(brushDown) {
        return this.style.backgroundColor = color.value;
    }
}

reset.addEventListener('click', function(){
    canvas.innerHTML = '';
    createGrid();
})