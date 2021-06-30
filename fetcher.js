const fs = require('fs');
const request = require('request');
const arg1 = process.argv.slice(2,3).toString();
const arg2 = process.argv.slice(3,4).toString();

const writeToFile = function (filePath, contents) {
  fs.writeFile(filePath, contents, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`File written succesfully to ${filePath}`);
  });
}

const getPageContents = function (url, filePath, instructions) {
  request(url, (error, response, body) => {
    instructions(filePath, body);
  });
};

getPageContents(arg1, arg2, writeToFile);




