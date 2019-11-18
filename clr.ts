// Typescript ver.
// colors:
const white   = ["\x1b[37m", "\x1b[0m"]
const black   = ["\x1b[30m", "\x1b[0m"]
const red     = ["\x1b[31m", "\x1b[0m"]
const green   = ["\x1b[32m", "\x1b[0m"]
const blue    = ["\x1b[34m", "\x1b[0m"]
const yellow  = ["\x1b[33m", "\x1b[0m"]
const magenta = ["\x1b[35m", "\x1b[0m"]
const cyan    = ["\x1b[36m", "\x1b[0m"]

// Specials
const bolds     = ["\033[1m", "\033[0m"]
const underline = ["\033[4m", "\033[0m"]
const darky     = ["\033[2m", "\033[0m"]
const stroke    = ["\033[9m", "\033[0m"]
// colors:
const bwhite   = ["\x1b[47m", "\x1b[0m"]
const bblack   = ["\x1b[40m", "\x1b[0m"]
const bred     = ["\x1b[41m", "\x1b[0m"]
const bgreen   = ["\x1b[42m", "\x1b[0m"]
const bblue    = ["\x1b[44m", "\x1b[0m"]
const byellow  = ["\x1b[43m", "\x1b[0m"]
const bmagenta = ["\x1b[45m", "\x1b[0m"]
const bcyan    = ["\x1b[46m", "\x1b[0m"]

const clr =  {
  // Colors
  white:   (str:string) => `${white[0]}${str}${white[1]}`,
  black:   (str:string) => `${black[0]}${str}${black[1]}`,
  red:     (str:string) => `${red[0]}${str}${red[1]}`,
  green:   (str:string) => `${green[0]}${str}${green[1]}`,
  blue:    (str:string) => `${blue[0]}${str}${blue[1]}`,
  yellow:  (str:string) => `${yellow[0]}${str}${yellow[1]}`,
  magenta: (str:string) => `${magenta[0]}${str}${magenta[1]}`,
  cyan:    (str:string) => `${cyan[0]}${str}${cyan[1]}`,
  // Background colors
  bwhite:   (str:string) => `${bwhite[0]}${str}${bwhite[1]}`,
  bblack:   (str:string) => `${bblack[0]}${str}${bblack[1]}`,
  bred:     (str:string) => `${bred[0]}${str}${bred[1]}`,
  bgreen:   (str:string) => `${bgreen[0]}${str}${bgreen[1]}`,
  bblue:    (str:string) => `${bblue[0]}${str}${bblue[1]}`,
  byellow:  (str:string) => `${byellow[0]}${str}${byellow[1]}`,
  bmagenta: (str:string) => `${bmagenta[0]}${str}${bmagenta[1]}`,
  bcyan:    (str:string) => `${bcyan[0]}${str}${bcyan[1]}`,
  // Specials
  bold :    (colorstr:string) => `${bolds[0]}${colorstr}${bolds[1]}`,
  uline:    (colorstr:string) => `${underline[0]}${colorstr}${underline[1]}`,
  darky:    (colorstr:string) => `${darky[0]}${colorstr}${darky[1]}`,
  stroke:   (colorstr:string) => `${stroke[0]}${colorstr}${stroke[1]}`
}

export default clr
/*
TODO:
- More colors;
- Two Variant colors
*/