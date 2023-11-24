const flights = require('../repository/flightList');
const _ = require('lodash');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {

    const list = flights.filter((item) => _.isMatch(item, req.query));

    return res.json(list);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
   
    const list = flights.filter((item) => item.uuid === req.params.id);

    return res.status(200).json(list);

  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let data;

    flights.map((item) => {
      if(item.uuid === req.params.id){
        for(let key in req.body){
          item[key] = req.body[key];
        }
        data = item;
      }
    });
    
    return res.status(200).json(data);
  }
};
