const DEFAULT_COLOR = '#252525';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

let mouseDown = false;

const display = document.querySelector('#display');

const colorPicker = document.querySelector('#color-picker');

const colorBtn = document.querySelector('#color-btn');

const rainbowBtn = document.querySelector('#rainbow-btn');

const eraserBtn = document.querySelector('#eraser-btn');

const clearBtn = document.querySelector('#clear-btn');

const sizeBtn = document.querySelector('#size-btn');

const resetSizeBtn = document.querySelector("#reset-size-btn");

const sizeLabel = document.querySelector("#size-label")

function setColor(newColor) {
  currentColor = newColor;
}

function setMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setSize() {
  currentSize = prompt("Insert your size: 1 to 64");

  while (currentSize !== parseInt(currentSize, 10).toString()) {
    alert("Please enter only numbers!");
    currentSize = prompt("Enter size: 1 to 64");
    while (Number(currentSize) < 1 || Number(currentSize) > 64) {
      alert("Please enter a a number between 1 and 64!");
      currentSize = prompt("Enter size: 1 to 64");
    }
  }

  sizeLabel.textContent = `${currentSize} x ${currentSize}`

  return currentSize;
}

function colorMode(e) {
  e.target.style.backgroundColor = currentColor;
}

function eraserMode(e) {
  e.target.style.backgroundColor = 'ghostwhite';
}

function rainbowMode(e) {
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if(currentMode === 'color') {
    colorMode(e);
  } else if(currentMode === 'rainbow') {
    rainbowMode(e);
  } else if(currentMode === 'eraser') {
    eraserMode(e);
  }
}

function createGrid(gridSize) {

  display.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  display.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    square.addEventListener('mousedown', changeColor);
    display.appendChild(square);
  }
}

function clearGrid() {
  display.innerHTML = '';
}

function reloadGrid() {
  let result = confirm("Are you sure?");
  if(result === true) {
    clearGrid();
    createGrid(currentSize);
  }
}

function changeGridSize() {
  clearGrid();
  createGrid(setSize());
}

function resetSize() {
  clearGrid();
  createGrid(DEFAULT_SIZE);
  sizeLabel.textContent = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`
}

function activateButton(newMode) {

  switch (currentMode) {
    case 'rainbow':
      rainbowBtn.classList.remove('active');
      break;
    case 'color':
      colorBtn.classList.remove('active');
      break;
    case 'eraser':
      eraserBtn.classList.remove('active');
      break;
  }

  switch (newMode) {
    case 'rainbow':
      rainbowBtn.classList.add('active');
      break;
    case 'color':
      colorBtn.classList.add('active');
      break;
    case 'eraser':
      eraserBtn.classList.add('active');
      break;
  }

}

colorPicker.oninput = (e) => setColor(e.target.value);

colorBtn.onclick = () => setMode('color')
rainbowBtn.onclick = () => setMode('rainbow');
eraserBtn.onclick = () => setMode('eraser');

clearBtn.onclick = () => reloadGrid();
sizeBtn.onclick = () => changeGridSize();
resetSizeBtn.onclick = () => resetSize();

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

window.onload = () => {
  colorPicker.value = "252525";
  createGrid(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE)
}