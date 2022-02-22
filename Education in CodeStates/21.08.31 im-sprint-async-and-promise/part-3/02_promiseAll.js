//const { response } = require("express");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let data1 = fetch(newsURL).then((el1) => el1.json());  // json변환 후 parsing까지 해서 가져옴;;;
  let data2 = fetch(weatherURL).then((el2) => el2.json());

  return Promise.all([data1, data2]).then((result) => {
    return { news: result[0].data, weather: result[1]}
  });
  
  // let data1 = () => {
  //   return fetch(newsURL)
  //     .then(response1 => response1.json())
  //     .then(json1 => json1.data)
  // }
  // let data2 = () => {
  //   return fetch(weatherURL)
  //     .then(response2 => response2.json())
  //     .then(json2 => json2)
  // }
  // return Promise.all([data1(), data2()])
  //          .then((data) => {
  //            let obj2 = {};
  //            obj2["news"] = data[0];
  //            obj2["weather"] = data[1];
  //            return obj2;
  //          })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}