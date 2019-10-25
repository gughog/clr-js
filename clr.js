// colors:
let white   = "\x1b[37m"
let black   = "\x1b[30m"
let red     = "\x1b[31m"
let green   = "\x1b[32m"
let blue    = "\x1b[34m"
let yellow  = "\x1b[33m"
let magenta = "\x1b[35m"
let cyan    = "\x1b[36m"

// Specials
let bolds     = ["\033[1m", "\033[0m"]
let underline = ["\033[4m", "\033[0m"]
let darky     = ["\033[2m", "\033[0m"]
let stroke    = ["\033[9m", "\033[0m"]
// colors:
let bwhite = "\x1b[47m"
let bblack = "\x1b[40m"
let bred = "\x1b[41m"
let bgreen = "\x1b[42m"
let bblue = "\x1b[44m"
let byellow = "\x1b[43m"
let bmagenta = "\x1b[45m"
let bcyan = "\x1b[46m"

module.exports =  {
  // Colors
  white:   (str) => `${white}${str}\x1b[0m`,
  black:   (str) => `${black}${str}\x1b[0m`,
  red:     (str) => `${red}${str}\x1b[0m`,
  green:   (str) => `${green}${str}\x1b[0m`,
  blue:    (str) => `${blue}${str}\x1b[0m`,
  yellow:  (str) => `${yellow}${str}\x1b[0m`,
  magenta: (str) => `${magenta}${str}\x1b[0m`,
  cyan:    (str) => `${cyan}${str}\x1b[0m`,
  // Background colors
  bwhite:   (str) => `${bwhite}${str}\x1b[0m`,
  bblack:   (str) => `${bblack}${str}\x1b[0m`,
  bred:     (str) => `${bred}${str}\x1b[0m`,
  bgreen:   (str) => `${bgreen}${str}\x1b[0m`,
  bblue:    (str) => `${bblue}${str}\x1b[0m`,
  byellow:  (str) => `${byellow}${str}\x1b[0m`,
  bmagenta: (str) => `${bmagenta}${str}\x1b[0m`,
  bcyan:    (str) => `${bcyan}${str}\x1b[0m`,
  // Specials
  bold :    (colorstr) => `${bolds[0]}${colorstr}${bolds[1]}`,
  uline:    (colorstr) => `${underline[0]}${colorstr}${underline[1]}`,
  darky:    (colorstr) => `${darky[0]}${colorstr}${darky[1]}`,
  stroke:   (colorstr) => `${stroke[0]}${colorstr}${stroke[1]}`
}

/*
TODO:
- More colors;
*/