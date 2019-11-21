/** Clr.js (Typescript Ver.) - Simple CLI colors */

/**
 * Text color definition.
 */
const white:string[]   = ["\x1b[37m", "\x1b[0m"];
const black:string[]   = ["\x1b[30m", "\x1b[0m"];
const red:string[]     = ["\x1b[31m", "\x1b[0m"];
const green:string[]   = ["\x1b[32m", "\x1b[0m"];
const blue:string[]    = ["\x1b[34m", "\x1b[0m"];
const yellow:string[]  = ["\x1b[33m", "\x1b[0m"];
const magenta:string[] = ["\x1b[35m", "\x1b[0m"];
const cyan:string[]    = ["\x1b[36m", "\x1b[0m"];

/**
 * Special text formatting definition.
 */
const bolds:string[]     = ["\033[1m", "\033[0m"];
const underline:string[] = ["\033[4m", "\033[0m"];
const darky:string[]     = ["\033[2m", "\033[0m"];
const stroke:string[]    = ["\033[9m", "\033[0m"];
/**
 * Background colors definition.
 */
const bwhite:string[]   = ["\x1b[47m", "\x1b[0m"];
const bblack:string[]   = ["\x1b[40m", "\x1b[0m"];
const bred:string[]     = ["\x1b[41m", "\x1b[0m"];
const bgreen:string[]   = ["\x1b[42m", "\x1b[0m"];
const bblue:string[]    = ["\x1b[44m", "\x1b[0m"];
const byellow:string[]  = ["\x1b[43m", "\x1b[0m"];
const bmagenta:string[] = ["\x1b[45m", "\x1b[0m"];
const bcyan:string[]    = ["\x1b[46m", "\x1b[0m"];

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
  white:   (str:string):string => `${white[0]}${str}${white[1]}`,
  black:   (str:string):string => `${black[0]}${str}${black[1]}`,
  red:     (str:string):string => `${red[0]}${str}${red[1]}`,
  green:   (str:string):string => `${green[0]}${str}${green[1]}`,
  blue:    (str:string):string => `${blue[0]}${str}${blue[1]}`,
  yellow:  (str:string):string => `${yellow[0]}${str}${yellow[1]}`,
  magenta: (str:string):string => `${magenta[0]}${str}${magenta[1]}`,
  cyan:    (str:string):string => `${cyan[0]}${str}${cyan[1]}`,
  /**
   * Background color method that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the background color.
   */
  bwhite:   (str:string):string => `${bwhite[0]}${str}${bwhite[1]}`,
  bblack:   (str:string):string => `${bblack[0]}${str}${bblack[1]}`,
  bred:     (str:string):string => `${bred[0]}${str}${bred[1]}`,
  bgreen:   (str:string):string => `${bgreen[0]}${str}${bgreen[1]}`,
  bblue:    (str:string):string => `${bblue[0]}${str}${bblue[1]}`,
  byellow:  (str:string):string => `${byellow[0]}${str}${byellow[1]}`,
  bmagenta: (str:string):string => `${bmagenta[0]}${str}${bmagenta[1]}`,
  bcyan:    (str:string):string => `${bcyan[0]}${str}${bcyan[1]}`,
  /**
   * Special text formatting method that applies to a string.
   * @function
   * @param {string} colorstr - The desired colorized string to apply the formatting.
   */
  bold :    (colorstr:string):string => `${bolds[0]}${colorstr}${bolds[1]}`,
  uline:    (colorstr:string):string => `${underline[0]}${colorstr}${underline[1]}`,
  darky:    (colorstr:string):string => `${darky[0]}${colorstr}${darky[1]}`,
  stroke:   (colorstr:string):string => `${stroke[0]}${colorstr}${stroke[1]}`
};

export default clr;

/*
TODO:
- More colors;
- Two Variant colors
*/
