/** Clr.js (Typescript Ver.) - Simple CLI colors */
import { BCOLORS, COLORS, SPECIALS } from './data';

/**
 * Colletion of methods for clr.ts library.
 * @module Clr.ts
 */
const clr = {
  /**
   * The string with all formatted styles.
   */
  result: '',
  /// Colors ================================================================

  /**
   * Color methods that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the color.
   */
  black(str: string = this.result) {
    this.result = COLORS.colorBlack[0] + str + COLORS.colorBlack[1];
    return this;
  },
  blue(str: string = this.result) {
    this.result = COLORS.colorBlue[0] + str + COLORS.colorBlue[1];
    return this;
  },
  cyan(str: string = this.result) {
    this.result = COLORS.colorCyan[0] + str + COLORS.colorCyan[1];
    return this;
  },
  green(str: string = this.result) {
    this.result = COLORS.colorGreen[0] + str + COLORS.colorGreen[1];
    return this;
  },
  magenta(str: string = this.result) {
    this.result = COLORS.colorMagenta[0] + str + COLORS.colorMagenta[1];
    return this;
  },
  red(str: string = this.result) {
    this.result = COLORS.colorRed[0] + str + COLORS.colorRed[1];
    return this;
  },
  white(str: string = this.result) {
    this.result = COLORS.colorWhite[0] + str + COLORS.colorWhite[1];
    return this;
  },
  yellow(str: string = this.result) {
    this.result = COLORS.colorYellow[0] + str + COLORS.colorYellow[1];
    return this;
  },

  /// Backgrounds ================================================================

  /**
   * Background colors method that applies to a string.
   * @function
   * @param {string} str - The desired string to apply the background color.
   */
  bblack(str: string = this.result) {
    this.result = BCOLORS.colorBBlack[0] + str + BCOLORS.colorBBlack[1];
    return this;
  },
  bblue(str: string = this.result) {
    this.result = BCOLORS.colorBBlue[0] + str + BCOLORS.colorBBlue[1];
    return this;
  },
  bcyan(str: string = this.result) {
    this.result = BCOLORS.colorBCyan[0] + str + BCOLORS.colorBCyan[1];
    return this;
  },
  bgreen(str: string = this.result) {
    this.result = BCOLORS.colorBGreen[0] + str + BCOLORS.colorBGreen[1];
    return this;
  },
  bmagenta(str: string = this.result) {
    this.result = BCOLORS.colorBMagenta[0] + str + BCOLORS.colorBMagenta[1];
    return this;
  },
  bred(str: string = this.result) {
    this.result = BCOLORS.colorBRed[0] + str + BCOLORS.colorBRed[1];
    return this;
  },
  bwhite(str: string = this.result) {
    this.result = BCOLORS.colorBWhite[0] + str + BCOLORS.colorBWhite[1];
    return this;
  },
  byellow(str: string = this.result) {
    this.result = BCOLORS.colorBYellow[0] + str + BCOLORS.colorBYellow[1];
    return this;
  },

  /// Special formatting ===========================================================

  /**
   * Special text formatting method that applies to a string.
   * @function
   * @param {string} colorstr - The desired colorized string to apply the formatting.
   */
  bold(colorstr: string = this.result): string {
    this.result = SPECIALS.colorBolds[0] + colorstr + SPECIALS.colorBolds[1];
    return this;
  },
  darky(colorstr: string = this.result) {
    this.result = SPECIALS.colorDarky[0] + colorstr + SPECIALS.colorDarky[1];
    return this;
  },
  stroke(colorstr: string = this.result) {
    this.result = SPECIALS.colorStroke[0] + colorstr + SPECIALS.colorStroke[1];
    return this;
  },
  uline(colorstr: string = this.result) {
    this.result = SPECIALS.colorUnderline[0] + colorstr + SPECIALS.colorUnderline[1];
    return this;
  },

  /**
   * It wraps and return the string with the appended styles.
   */
  it() {
    return this.result;
  },
};

export = clr;

/*
TODO:
- More colors;
- Two Variant colors
*/
