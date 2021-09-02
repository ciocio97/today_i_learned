const path = require('path');
const { getDataFromFile } = require('./01_callBack');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다

const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let arr = [];
  return getDataFromFilePromise(user1Path)
  .then((data1) => {
  // Lexical Scope 함수가 선언될 때 당시의 환경을 기억함
    arr.push(JSON.parse(data1));
    return getDataFromFilePromise(user2Path)
  })
  .then((data2) => {
    // JSON파일이라 모두 문자열로 넘어와서?
    arr.push(JSON.parse(data2));
    return arr;
  })
  // 마지막에 parse 해주기?
  // .then((arr) => JSON.parse(arr));
}

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}