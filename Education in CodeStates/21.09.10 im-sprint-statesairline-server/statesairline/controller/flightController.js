const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {

    // console.log(req.query);
    // 세 번째 방법 : Refactoring
    const list = flights.filter(item => _.isMatch(item, req.query));
    // 두 번째 방법 : Refactoring
    const list2 = flights.filter(item => {
      return (item.uuid === (req.query.uuid || item.uuid)) && 
             (item.departure === (req.query.departure || item.departure))&& 
             (item.destination === (req.query.destination || item.destination)) && 
             (item.departure_times === (req.query.departure_times || item.departure_times)) && 
             (item.arrival_times === (req.query.arrival_times || item.arrival_times))
             // 와 대박 
             // or 비교 연산자는 
             // 한개는 truthy한 값, 한개는 falsy한 값이라면 (undefined || 345)  (345 || undefined) 순서 상관없이 truthy한 값을 반환한다.
             // 둘 다 truthy한 값이라면 (4 || 5) (5 || 4) (크기 상관없이) 맨 앞에 위치한 값을 반환한다.
             // 둘 다 falsy한 값이라면 (0 || undefined) (undefined || 0) 맨 뒤에 위치한 값을 반환한다.
    })
    return res.json(list2);
    // 첫 번째 방법
    const dep = req.query.departure;
    const des = req.query.destination;
    const dt = req.query.departure_times;
    const at = req.query.arrival_times;

    if(dep && des){
      const list1 = flights.filter((item) => {
        return item.departure.includes(dep.toUpperCase()) && 
               item.destination.includes(des.toUpperCase());
      });
      return res.status(200).json(list1);
    }
    else if(dt && at){
      const list2 = flights.filter((item) => {
        return item.departure_times.includes(dt.toUpperCase()) && 
               item.arrival_times.includes(at.toUpperCase());
      });
      return res.status(200).json(list2);
    }

    return res.json(flights);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    // 두 번째 방법 : Refactoring
    const list = flights.filter(item => {
      return item.uuid === req.params.id
    })
    return res.json(list);
    // 첫 번째 방법
    const id = req.params.id

    if(id){
      const list = flights.filter((item) => {
        return item.uuid.includes(id);
      })
      return res.status(200).json(list);
    }
    
    return res.status(200).json(flights);

  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    const id = req.params.id;
    let data;

    flights.forEach((item) => {
      if(item.uuid === id){
        for(let key in req.body){
          item[key] = req.body[key];
        }
        data = item;
      }
    });
    
    return res.status(200).json(data);
  }
};
