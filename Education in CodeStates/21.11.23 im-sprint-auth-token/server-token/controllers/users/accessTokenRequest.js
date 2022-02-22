const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  const authorization = req.headers['authorization'];
  
  if(!authorization){
    res.status(400).json({ data: null, message: 'invalid access token' });
  }
  else{
    const token = authorization.split(' ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userInfo = await Users.findOne({
      where: { userId: data.userId }
    });
    
    if(!userInfo){
      res.status(403).json({ data: null, message: 'access token has been tempered' });
    }
    else{
      const payload = userInfo.dataValues;
      delete payload.password;
      res.status(200).json({ data: { userInfo: payload }, message: 'ok' });
    }
    // async 와 await 문제인데 ... then 왜 안되지 ?>>??????
  }
};
