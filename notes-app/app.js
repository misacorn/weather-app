const chalk = require("chalk");
const text = require("./notes");

const log = console.log;
log(chalk.bgRed("Success!"));

const showText = text();
console.log(showText);

// const fs = require("fs")

// fs.writeFileSync("notes.txt", "This is the first line. ")
// fs.appendFileSync("notes.txt", "And this is the second one.")

// const validator = require("validator");

// console.log(validator.isURL("gmail@co"));
