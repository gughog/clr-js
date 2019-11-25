/** Clr.js (Typescript Ver.) - Simple CLI colors */

/**
 * Text color definition.
 */
const colorWhite:string[]   = ["\x1b[37m", "\x1b[0m"];
const colorBlack:string[]   = ["\x1b[30m", "\x1b[0m"];
const colorRed:string[]     = ["\x1b[31m", "\x1b[0m"];
const colorGreen:string[]   = ["\x1b[32m", "\x1b[0m"];
const colorBlue:string[]    = ["\x1b[34m", "\x1b[0m"];
const colorYellow:string[]  = ["\x1b[33m", "\x1b[0m"];
const colorMagenta:string[] = ["\x1b[35m", "\x1b[0m"];
const colorCyan:string[]    = ["\x1b[36m", "\x1b[0m"];

/**
 * Special text formatting definition.
 */
const colorBolds:string[]     = ["\033[1m", "\033[0m"];
const colorUnderline:string[] = ["\033[4m", "\033[0m"];
const colorDarky:string[]     = ["\033[2m", "\033[0m"];
const colorStroke:string[]    = ["\033[9m", "\033[0m"];
/**
 * Background colors definition.
 */
const colorBWhite:string[]   = ["\x1b[47m", "\x1b[0m"];
const colorBBlack:string[]   = ["\x1b[40m", "\x1b[0m"];
const colorBRed:string[]     = ["\x1b[41m", "\x1b[0m"];
const colorBGreen:string[]   = ["\x1b[42m", "\x1b[0m"];
const colorBBlue:string[]    = ["\x1b[44m", "\x1b[0m"];
const colorBYellow:string[]  = ["\x1b[43m", "\x1b[0m"];
const colorBMagenta:string[] = ["\x1b[45m", "\x1b[0m"];
const colorBCyan:string[]    = ["\x1b[46m", "\x1b[0m"];

/**
 * Colletion of methods for clr.ts library.
 * @module Clr.ts
 */
const clr = {
  /**
   * Color method that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the color.
   */
  white:   (str:string):string => `${colorWhite[0]}${str}${colorWhite[1]}`,
  black:   (str:string):string => `${colorBlack[0]}${str}${colorBlack[1]}`,
  red:     (str:string):string => `${colorRed[0]}${str}${colorRed[1]}`,
  green:   (str:string):string => `${colorGreen[0]}${str}${colorGreen[1]}`,
  blue:    (str:string):string => `${colorBlue[0]}${str}${colorBlue[1]}`,
  yellow:  (str:string):string => `${colorYellow[0]}${str}${colorYellow[1]}`,
  magenta: (str:string):string => `${colorMagenta[0]}${str}${colorMagenta[1]}`,
  cyan:    (str:string):string => `${colorCyan[0]}${str}${colorCyan[1]}`,
  /**
   * Background color method that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the background color.
   */
  bwhite:   (str:string):string => `${colorBWhite[0]}${str}${colorBWhite[1]}`,
  bblack:   (str:string):string => `${colorBBlack[0]}${str}${colorBBlack[1]}`,
  bred:     (str:string):string => `${colorBRed[0]}${str}${colorBRed[1]}`,
  bgreen:   (str:string):string => `${colorBGreen[0]}${str}${colorBGreen[1]}`,
  bblue:    (str:string):string => `${colorBBlue[0]}${str}${colorBBlue[1]}`,
  byellow:  (str:string):string => `${colorBYellow[0]}${str}${colorBYellow[1]}`,
  bmagenta: (str:string):string => `${colorBMagenta[0]}${str}${colorBMagenta[1]}`,
  bcyan:    (str:string):string => `${colorBCyan[0]}${str}${colorBCyan[1]}`,
  /**
   * Special text formatting method that applies to a string.
   * @function
   * @param {string} colorstr - The desired colorized string to apply the formatting.
   */
  bold :    (colorstr:string):string => `${colorBolds[0]}${colorstr}${colorBolds[1]}`,
  uline:    (colorstr:string):string => `${colorUnderline[0]}${colorstr}${colorUnderline[1]}`,
  darky:    (colorstr:string):string => `${colorDarky[0]}${colorstr}${colorDarky[1]}`,
  stroke:   (colorstr:string):string => `${colorStroke[0]}${colorstr}${colorStroke[1]}`
};

export = clr;

/*
TODO:
- More colors;
- Two Variant colors
*/
