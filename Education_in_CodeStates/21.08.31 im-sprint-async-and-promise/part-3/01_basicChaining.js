const { response } = require("express");
const { json } = require("express/lib/response");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let obj = {};
  return fetch(newsURL)
  .then(response1 => response1.json())
  .then(json1 => {
    obj["news"] = json1.data
    return fetch(weatherURL);
  })
  .then(response2 => response2.json())
  .then(json2 => {
    obj["weather"] = json2;
    return obj;
  })
  // return fetch(newsURL)
  //   .then((response1) => {
  //     return response1.json()
  //   })
  //   .then((json1) => {
  //     return fetch(weatherURL)
  //   .then((response2) => {
  //     return response2.json()
  //   })
  //   .then((json2) => {
  //     return{ news: json1.data, weather: json2}
  //   })
  // })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}