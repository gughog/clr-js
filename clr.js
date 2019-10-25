// colors:
let red = "\x1b[31m"
let green = "\x1b[32m"
let blue = "\x1b[34m"
let yellow = "\x1b[33m"
let white = "\x1b[37m"
let magenta = "\x1b[35m"
let cyan = "\x1b[36m"

// Specials
let bolds = ["\033[1m", "\033[0m"]

// colors:
let bred = "\x1b[41m"
let bgreen = "\x1b[42m"
let bblue = "\x1b[44m"
let byellow = "\x1b[43m"
let bwhite = "\x1b[47m"
let bmagenta = "\x1b[45m"
let bcyan = "\x1b[46m"

module.exports =  {
  // Colors
  red:     (str) => `${red}${str}\x1b[0m`,
  green:   (str) => `${green}${str}\x1b[0m`,
  blue:    (str) => `${blue}${str}\x1b[0m`,
  yellow:  (str) => `${yellow}${str}\x1b[0m`,
  white:   (str) => `${white}${str}\x1b[0m`,
  magenta: (str) => `${magenta}${str}\x1b[0m`,
  cyan:    (str) => `${cyan}${str}\x1b[0m`,
  // Backgrounds
  // Colors
  bred:     (str) => `${bred}${str}\x1b[0m`,
  bgreen:   (str) => `${bgreen}${str}\x1b[0m`,
  bblue:    (str) => `${bblue}${str}\x1b[0m`,
  byellow:  (str) => `${byellow}${str}\x1b[0m`,
  bwhite:   (str) => `${bwhite}${str}\x1b[0m`,
  bmagenta: (str) => `${bmagenta}${str}\x1b[0m`,
  bcyan:    (str) => `${bcyan}${str}\x1b[0m`,
  // Specials
  bold :   (color) => `${bolds[0]}${color}${bolds[1]}`
}

/*
TODO:
- More colors;
- Bold Colors;
- Background colors;
- Underlined colors;
*/