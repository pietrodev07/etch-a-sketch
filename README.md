# ETCH A SKETCH

Etch-a-sketch is a pixel art drawing tool.

You can choose between two mode:

- **Color Mode**
- **Rainbow Mode**

In the color mode you can choose a color, while in the rainbow mode the computer randomly choose color .

The computer randomly choose color in the following method:

```js
function rainbowMode(e) {
  
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  
}
```

The project is structured in the following method:

- **index.html** (defines the structure of the page)

- **style.css** (defines the style of the page)

- **main.js** (defines the logic of the page)
