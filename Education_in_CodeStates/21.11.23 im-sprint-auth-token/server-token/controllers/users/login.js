const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  Users.findOne({
    where: { userId: req.body.userId, password: req.body.password }
  })
  .then((data) => {
    if(!data){
      res
        .status(400)
        .json({ 
          data: null, 
          message: 'not authorized' 
        });
    }
    else{
      const payload = data.dataValues;
      delete payload.password;
      const access_token = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: 60 * 60 });
      const refresh_token = jwt.sign(payload, process.env.REFRESH_SECRET);

      // res.cookie('refreshToken', refresh_token) 또 다른 쿠키 설정 방법
      res
        .append('Set-Cookie', `refreshToken=${refresh_token}; SameSite=none; Secure; HttpOnly`)
        .status(200)
        .json({
          data: {
            accessToken: access_token
          },
          message: 'ok'
        })
    }
  })
};
