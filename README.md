# Clr.js - The dead-simple terminal colors for Node.js.

Clr is a dead simple color library for nodejs to colorize things and put some styles to your strings in your terminal. It's a Work-in-progress (WIP) currently in the 1.0.0 version, yay!

Actually clr-js is just a project for fun, to learn new things and to play with some nice features of the world of development. If you have a better approach to this, please, contribute! Or if you just want to install for create your terminal based apps, feel free to do it.

This is my first open-source contribution, so if you find any errors, bugs or something bad, please report and let's learn together. :smile:

## Getting started

### Installation

* With NPM:
`npm install clr-js`

* With Yarn:
`yarn add clr-js`

---

### Usage (New 1.0.0 version)

This 1.0.0 version introduces the chaining methods for Clr-js! To use in your Javascript/Typescript file:

```js
const clr = require('clr-js');

// A bold and yellow text will be shown in your terminal!
console.log(
  clr.bold('Hello, javascript colorful world!')
     .yellow()
     .it();
)
```

```ts
import * as clr from '../clr';

console.log(
  clr.bold('Hello, typescript colorful world!')
     .blue()
     .it();
)
```

Notice: You only need to declare the string you'll paint in the first method.

Notice2: A little tweak was made for finish the method chaining: when you done calling all your methods, finish the chain with `.it()`.

## API (ver. 1.0.0)

### Colors:

Color       | Applying to text          | Applying to background
------------|---------------------------|-----------------------
 Blue       | `clr.blue(<str>).it()`    | `clr.bblue(<str>).it()`
 Red        | `clr.red(<str>).it()`     | `clr.bred(<str>).it()`
 Yellow     | `clr.yellow(<str>).it()`  | `clr.byellow(<str>).it()`
 Green      | `clr.green(<str>).it()`   | `clr.bgreen(<str>).it()`
 Cyan       | `clr.cyan(<str>).it()`    | `clr.bcyan(<str>).it()`
 Magenta    | `clr.magenta(<str>).it()` | `clr.bmagenta(<str>).it()`
 White      | `clr.white(<str>).it()`   | `clr.bwhite(<str>).it()`
 Black      | `clr.black(<str>).it()`   | `clr.bblack(<str>).it()`

### Special Text Formatting

Text Formatting | Method 
----------------|--------
 Bold text      | `clr.bold(<str>).it()`
 Underlined     | `clr.uline(<str>).it()`
 Dark text      | `clr.darky(<str>).it()`
 Stroke         | `clr.stroke(<str>).it()`

### Applying Special formatting and colors in texts:

```js
const clr = require('clr-js');

let stringy = 'My colorful string.';

// Bold and blue text;
console.log(
  clr.bold(stringy)
     .blue()
     .it();
)

// Bold, underlined magenta-colored text;
console.log(
  clr.bold(stringy)
     .uline()
     .magenta()
     .it();
)

// White background with black text;
console.log(
  clr.bwhite(stringy)
     .black()
     .it();
)

// Or just use inline
console.log(
  clr.bwhite(stringy).black().it();
)

```

---
---

## The above guide refers to the old version of Clr-js, and is not compatible with 1.0.0!

### Usage (ver. 0.1.7 and bellow only)

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
