// const fs = require("fs")

// fs.writeFileSync("notes.txt", "This is the first line. ")
// fs.appendFileSync("notes.txt", "And this is the second one.")

const text = require("./notes");

const showText = text()

console.log(showText);
