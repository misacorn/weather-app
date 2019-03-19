const fs = require("fs");

// const book = {
//   title: "21 Lessons for the 21st century",
//   author: "Yuval Noah Harari"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("json1.json", bookJSON)

const dataBuffer = fs.readFileSync("json1.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// console.log(data.title)

user.name = "Misa";
user.age = "25";

const userJSON = JSON.stringify(user)
fs.writeFileSync("json1.json", userJSON);
