// colors:
let white   = ["\x1b[37m", "\x1b[0m"]
let black   = ["\x1b[30m", "\x1b[0m"]
let red     = ["\x1b[31m", "\x1b[0m"]
let green   = ["\x1b[32m", "\x1b[0m"]
let blue    = ["\x1b[34m", "\x1b[0m"]
let yellow  = ["\x1b[33m", "\x1b[0m"]
let magenta = ["\x1b[35m", "\x1b[0m"]
let cyan    = ["\x1b[36m", "\x1b[0m"]

// Specials
let bolds     = ["\033[1m", "\033[0m"]
let underline = ["\033[4m", "\033[0m"]
let darky     = ["\033[2m", "\033[0m"]
let stroke    = ["\033[9m", "\033[0m"]
// colors:
let bwhite   = ["\x1b[47m", "\x1b[0m"]
let bblack   = ["\x1b[40m", "\x1b[0m"]
let bred     = ["\x1b[41m", "\x1b[0m"]
let bgreen   = ["\x1b[42m", "\x1b[0m"]
let bblue    = ["\x1b[44m", "\x1b[0m"]
let byellow  = ["\x1b[43m", "\x1b[0m"]
let bmagenta = ["\x1b[45m", "\x1b[0m"]
let bcyan    = ["\x1b[46m", "\x1b[0m"]

module.exports =  {
  // Colors
  white:   (str) => `${white[0]}${str}${white[1]}`,
  black:   (str) => `${black[0]}${str}${black[1]}`,
  red:     (str) => `${red[0]}${str}${red[1]}`,
  green:   (str) => `${green[0]}${str}${green[1]}`,
  blue:    (str) => `${blue[0]}${str}${blue[1]}`,
  yellow:  (str) => `${yellow[0]}${str}${yellow[1]}`,
  magenta: (str) => `${magenta[0]}${str}${magenta[1]}`,
  cyan:    (str) => `${cyan[0]}${str}${cyan[1]}`,
  // Background colors
  bwhite:   (str) => `${bwhite[0]}${str}${bwhite[1]}`,
  bblack:   (str) => `${bblack[0]}${str}${bblack[1]}`,
  bred:     (str) => `${bred[0]}${str}${bred[1]}`,
  bgreen:   (str) => `${bgreen[0]}${str}${bgreen[1]}`,
  bblue:    (str) => `${bblue[0]}${str}${bblue[1]}`,
  byellow:  (str) => `${byellow[0]}${str}${byellow[1]}`,
  bmagenta: (str) => `${bmagenta[0]}${str}${bmagenta[1]}`,
  bcyan:    (str) => `${bcyan[0]}${str}${bcyan[1]}`,
  // Specials
  bold :    (colorstr) => `${bolds[0]}${colorstr}${bolds[1]}`,
  uline:    (colorstr) => `${underline[0]}${colorstr}${underline[1]}`,
  darky:    (colorstr) => `${darky[0]}${colorstr}${darky[1]}`,
  stroke:   (colorstr) => `${stroke[0]}${colorstr}${stroke[1]}`
}

/*
TODO:
- More colors;
- Two Variant colors
*/
