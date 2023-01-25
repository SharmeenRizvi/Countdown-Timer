#!/usr/bin/env node

import chalk from 'chalk';

console.log(chalk.blue(` 
██████  ██████  ██    ██ ███    ██ ████████ ██████   ██████  ██     ██ ███    ██     ████████ ██ ███    ███ ███████ ██████  
██      ██    ██ ██    ██ ████   ██    ██    ██   ██ ██    ██ ██     ██ ████   ██        ██    ██ ████  ████ ██      ██   ██ 
██      ██    ██ ██    ██ ██ ██  ██    ██    ██   ██ ██    ██ ██  █  ██ ██ ██  ██        ██    ██ ██ ████ ██ █████   ██████  
██      ██    ██ ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██ ███ ██ ██  ██ ██        ██    ██ ██  ██  ██ ██      ██   ██ 
 ██████  ██████   ██████  ██   ████    ██    ██████   ██████   ███ ███  ██   ████        ██    ██ ██      ██ ███████ ██   ██ 
                                                                                                                             `
));

var countDownDate = new Date("mar 26, 2023 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours: number = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    console.log(chalk.bgGreenBright("Expired"));
  }
  console.log(
    chalk.bgRgb(241, 95, 246).whiteBright(
        `${days} days  |  ${hours} hours  | ${minutes} mins  | ${seconds} secs `)
  );
}, 1000);