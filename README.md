# Clr.js - The dead-simple terminal colors for Node.js.

Clr is a dead simple color library for nodejs to colorize things and put some styles to your strings in your terminal. It's a Work-in-progress (WIP).

## Getting started

### Installation

* With NPM:
`npm install clr-js`

* With Yarn:
`yarn add clr-js`

### Usage

To use in your Javascript/Typescript file:

```js
const clr = require('clr-js');

// A bold and blue text will be shown in your terminal!
console.log(clr.bold(clr.blue('Hello, colorful world!')))
```

## API

### Colors:

Color       | Applying to text     | Applying to background
------------|----------------------|-----------------------
 Blue       | `clr.blue(<str>)`    | `clr.bblue(<str>)`
 Red        | `clr.red(<str>)`     | `clr.bred(<str>)`
 Yellow     | `clr.yellow(<str>)`  | `clr.byellow(<str>)`
 Green      | `clr.green(<str>)`   | `clr.bgreen(<str>)`
 Cyan       | `clr.cyan(<str>)`    | `clr.bcyan(<str>)`
 Magenta    | `clr.magenta(<str>)` | `clr.bmagenta(<str>)`
 White      | `clr.white(<str>)`   | `clr.bwhite(<str>)`
 Black      | `clr.black(<str>)`   | `clr.bblack(<str>)`

### Special Text Formatting

Text Formatting | Method 
----------------|--------
 Bold text      | `clr.bold(<str>)`
 Underlined     | `clr.uline(<str>)`
 Dark text      | `clr.darky(<str>)`
 Stroke         | `clr.stroke(<str>)`

### Applying Special formatting in colored texts:

```js
let stringy = 'My colorful string.';

console.log( clr.bold(clr.blue(stringy)) ) // Bold and blue text;
console.log( clr.bold(clr.uline(clr.magenta(stringy))) ) // Bold, underlined magenta-colored text;
console.log( clr.bwhite(clr.black(stringy)) ) // White background with black text;
```
