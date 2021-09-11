const flights = require('../repository/flightList');
const _ = require('lodash');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    
    let list = booking.filter((item) => _.isMatch(item, req.query));

    if(req.query.phone) list = list[0];
    
    return res.status(200).json(list);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    
    console.log(req.body);
    booking.push(req.body);

    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {

    const list = booking.filter((item) => !_.isMatch(item, req.query));
   
    return res.status(200).json(list);
  }
};
