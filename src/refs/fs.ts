import fs from "fs";
import path from "path";

// * create folder
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) return;
//   console.log("Folder created...");
// });

// * create and write to file
// fs.writeFileSync(path.join(__dirname, "test", "hello.txt"), "Hello World!");

// * append file
// fs.appendFileSync(path.join(__dirname, "test", "hello.txt"), " I love Node.js");

// * read file
const data = fs.readFileSync(
  path.join(__dirname, "test", "hello.txt"),
  "utf-8"
);
console.log(data);

// * rename file
fs.renameSync(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hello-world.txt")
);
