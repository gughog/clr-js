import * as clr from '../../src/clr';

it('::: Color tests :::', () => {
  expect(clr.red('My red string').it()).toBe('\x1b[31mMy red string\x1b[0m');
  expect(clr.cyan('My cyan text').it()).toBe('\x1b[36mMy cyan text\x1b[0m');
});

it('::: Background tests :::', () => {
  expect(clr.bred('My bgred string').it()).toBe('\x1b[41mMy bgred string\x1b[0m');
  expect(clr.bcyan('My bgcyan text').it()).toBe('\x1b[46mMy bgcyan text\x1b[0m');
});

it('::: Special formatting tests :::', () => {
  expect(clr.bold('My bold string').it()).toBe('\033[1mMy bold string\033[0m');
  expect(clr.uline('My underlined text').it()).toBe('\033[4mMy underlined text\033[0m');
});

it('::: Mix formatting tests :::', () => {
  expect(
    clr
      .red('My red and bold string')
      .bold()
      .it(),
  ).toBe('\033[1m\x1b[31mMy red and bold string\x1b[0m\033[0m');
  expect(
    clr
      .bold('My bold and underlined text')
      .uline()
      .it(),
  ).toBe('\033[4m\033[1mMy bold and underlined text\033[0m\033[0m');
});
