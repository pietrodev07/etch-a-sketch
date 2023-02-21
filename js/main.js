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

function setColor(newColor) {
  currentColor = newColor;
}

function setMode(newMode) {
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