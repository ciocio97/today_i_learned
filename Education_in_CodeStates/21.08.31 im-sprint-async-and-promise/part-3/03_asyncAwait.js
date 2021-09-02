var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let data1 = await fetch(newsURL).then(response => response.json());
  let data2 = await fetch(weatherURL).then(response => response.json());

  return { news: data1.data, weather: data2};
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}


let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let values = [node.value];  // [1]

  node.children.forEach((n) => {
    values = values.concat(dfs(n));  // [1].{concat([2].concat([4, 5]))}.{concat([3].concat([자식]))}
  });                               

  return values;  // [values.concat(dfs(n))] ing // [values] 마지막
};

// Node1 {value: 1, children: [{value: 2, children: [{value: 4, children: []},{value: 5, children: []}]}, {value:3, children: [Array(1)]}]}


// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};