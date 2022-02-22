const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  let one = getDataFromFilePromise(user1Path);
  let two = getDataFromFilePromise(user2Path);
  return Promise.all([one, two])
    .then((data) => {
      return data.map(el => JSON.parse(el));
    });
}

// readAllUsers()

module.exports = {
  readAllUsers
}