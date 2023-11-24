const fs = require("fs");

const getDataFromFilePromise = filePath => {
  // return new Promise()
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      return error ? reject(error) : resolve(data);
    })
  });
};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
