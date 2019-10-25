const clr = require('./clr.js');

let str = `
  Lolita é um ${clr.bold(clr.red('romance'))} de 1955 escrito pelo romancista russo-americano ${clr.bred(clr.white('Vladimir Nabokov'))}. ${clr.bblack(clr.white('O romance é notável por seu assunto controverso'))}: o protagonista e narrador ${clr.bold(clr.stroke('não confiável'))}, um professor universitário de Literatura de meia-idade sob o pseudônimo Humbert Humbert, ${clr.bold('está obcecado por Dolores Haze')}, de 12 anos, com quem ele se torna ${clr.darky('sexualmente envolvido')} após ele se tornar padrasto dela. ${clr.cyan('"Lolita" é seu apelido privado para Dolores')}. O romance foi originalmente escrito em inglês e primeiro publicado em ${clr.black('Paris em 15 de setembro de 1955')} pela ${clr.bold(clr.blue(clr.uline('Olympia Press')))}. Mais tarde foi traduzido para russo pelo próprio Nabokov e publicado em Nova Iorque em 1967 pela Phaedra Publishers.
`
let str2 = 'The Lord of the Rings'

console.log(str)