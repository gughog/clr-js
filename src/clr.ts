/** Clr.js (Typescript Ver.) - Simple CLI colors */

import {
  BCOLORS,
  COLORS,
  SPECIALS
} from './data'

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
  white: (str: string): string => `${COLORS.colorWhite[0]}${str}${COLORS.colorWhite[1]}`,
  black: (str: string): string => `${COLORS.colorBlack[0]}${str}${COLORS.colorBlack[1]}`,
  red: (str: string): string => `${COLORS.colorRed[0]}${str}${COLORS.colorRed[1]}`,
  green: (str: string): string => `${COLORS.colorGreen[0]}${str}${COLORS.colorGreen[1]}`,
  blue: (str: string): string => `${COLORS.colorBlue[0]}${str}${COLORS.colorBlue[1]}`,
  yellow: (str: string): string => `${COLORS.colorYellow[0]}${str}${COLORS.colorYellow[1]}`,
  magenta: (str: string): string => `${COLORS.colorMagenta[0]}${str}${COLORS.colorMagenta[1]}`,
  cyan: (str: string): string => `${COLORS.colorCyan[0]}${str}${COLORS.colorCyan[1]}`,
  /**
   * Background color method that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the background color.
   */
  bwhite: (str: string): string => `${BCOLORS.colorBWhite[0]}${str}${BCOLORS.colorBWhite[1]}`,
  bblack: (str: string): string => `${BCOLORS.colorBBlack[0]}${str}${BCOLORS.colorBBlack[1]}`,
  bred: (str: string): string => `${BCOLORS.colorBRed[0]}${str}${BCOLORS.colorBRed[1]}`,
  bgreen: (str: string): string => `${BCOLORS.colorBGreen[0]}${str}${BCOLORS.colorBGreen[1]}`,
  bblue: (str: string): string => `${BCOLORS.colorBBlue[0]}${str}${BCOLORS.colorBBlue[1]}`,
  byellow: (str: string): string => `${BCOLORS.colorBYellow[0]}${str}${BCOLORS.colorBYellow[1]}`,
  bmagenta: (str: string): string => `${BCOLORS.colorBMagenta[0]}${str}${BCOLORS.colorBMagenta[1]}`,
  bcyan: (str: string): string => `${BCOLORS.colorBCyan[0]}${str}${BCOLORS.colorBCyan[1]}`,
  /**
   * Special text formatting method that applies to a string.
   * @function
   * @param {string} colorstr - The desired colorized string to apply the formatting.
   */
  bold: (colorstr: string): string => `${SPECIALS.colorBolds[0]}${colorstr}${SPECIALS.colorBolds[1]}`,
  uline: (colorstr: string): string => `${SPECIALS.colorUnderline[0]}${colorstr}${SPECIALS.colorUnderline[1]}`,
  darky: (colorstr: string): string => `${SPECIALS.colorDarky[0]}${colorstr}${SPECIALS.colorDarky[1]}`,
  stroke: (colorstr: string): string => `${SPECIALS.colorStroke[0]}${colorstr}${SPECIALS.colorStroke[1]}`,
};

export = clr;

/*
TODO:
- More colors;
- Two Variant colors
*/
