import fetch from 'node-fetch'

export function getFlight(filterBy = {}) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.

  const url = `http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=${filterBy.departure}&destination=${filterBy.destination}`;
  return fetch(url).then((response) => response.json())

  // let json = []
  // if (typeof window !== "undefined") {
  //   json = localStorage.getItem("flight");
  // }
  // const flight = JSON.parse(json) || [];

  // return new Promise((resolve) => {
  //   const filtered = flight.filter((flight) => {
  //     let condition = true;
  //     if (filterBy.departure) {
  //       condition = condition && flight.departure === filterBy.departure
  //     }
  //     if (filterBy.destination) {
  //       condition = condition && flight.destination === filterBy.destination
  //     }
  //     return condition;
  //   })

  //   setTimeout(() => {
  //     resolve(filtered)
  //   }, 500);
  // });
}