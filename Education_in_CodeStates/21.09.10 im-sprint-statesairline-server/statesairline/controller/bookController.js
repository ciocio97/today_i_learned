const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    const id = req.query.flight_uuid;
    const ph = req.query.phone;

    if(id){
      const list1 = booking.filter((item) => {
        return item.flight_uuid.includes(id);
      })
      return res.status(200).json(list1);
    }

    if(ph){
      const list2 = booking.filter((item) => {
        return item.phone.includes(ph);
      })
      return res.status(200).json(...list2);
    }
    
    return res.status(200).json(booking);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    
    booking.push(req.body);

    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {

    const ph = req.query.phone;
    
    if(ph){
      const list = booking.filter((item) => {
        return item.phone !== ph;
      })
      return res.status(200).json(list);
    }

    return res.status(200).json(booking);
  }
};
