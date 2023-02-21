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
