const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  const refreshToken = req.cookies.refreshToken;

  if(!refreshToken){
    res.status(403).json({ data: null, message: 'refresh token not provided' })
  }
  else{
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, async function(err, data){
      if(err){
        // console.log('에러에러');
        res.status(400).json({ data: null, message: 'invalid refresh token, please log in again' });
      }
      else{
        // console.log('와진짜 이상하다');
        const userInfo = await Users.findOne({
          where: { userId: data.userId }
        });
    
        if(!userInfo){
          res.status(401).json({ data: null, messgae: 'refresh token has been tempered' });
        }
        else{
          const payload = userInfo.dataValues;
          delete payload.password;
    
          const access_token = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: 60 * 60 });
    
          res
            .status(200)
            .json({ data: {
              accessToken: access_token,
              userInfo: payload
              }, 
              message: 'ok' 
            });
        }

      } 
    }); // 여기서 비동기 작업 아후 이어주지 않아서 마지막 요청이 이루어지지 않았구나.
    
    // if(!data) res.status(400).json({ data: null, message: 'invalid refresh token, please log in again' });

    // const userInfo = await Users.findOne({
    //   where: { userId: data.userId }
    // });

    // if(!userInfo){
    //   res.status(401).json({ data: null, messgae: 'refresh token has been tempered' });
    // }
    // else{
    //   const payload = userInfo.dataValues;
    //   delete payload.password;

    //   const access_token = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: 60 * 60 });

    //   res
    //     .status(200)
    //     .json({ data: {
    //       accessToken: access_token,
    //       userInfo: payload
    //       }, 
    //       message: 'ok' 
    //     });
    // }

  }
};
