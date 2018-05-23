const cron = require("cron").CronJob;

// 1st value => seconds of the minute 00- 59
// 2nd value => minutes of the hour 00 - 59
// 3rd value => hour of the day 0 - 23
// 4th value => day of month 1-31
// 5th value => month 0-11 Jan-Dec
// 6th value => 1-7 (days of week to complete task)

let logEvery5 = new cron(
  "* * * * * *",
  () => {
    console.log("every second this message will console log");
  },
  true, //start job right now
  "America/Chicago" //Time zone to run off of
);
// logEvery5.start();
console.log(`ONLINE : ${logEvery5.running}`);
