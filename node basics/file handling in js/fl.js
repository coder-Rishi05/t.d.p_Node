const fs = require("node:fs");

const content = "File Handling in JS";
const content1 = "with append";

fs.writeFile("test.txt", content1, { flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully");
  }
});
