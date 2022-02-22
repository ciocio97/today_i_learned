require('dotenv').config();

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = async(req, res) => {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
  // console.log(req.body);
  const authorization_code = req.body.authorizationCode;

  // TODO : 이제 authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github
  const data = await axios({
    headers: {
      accept: "application/json",
    },
    method: "post",
    url: 'https://github.com/login/oauth/access_token',
    data: {
      client_id: clientID,
      client_secret: clientSecret,
      code: req.body.authorizationCode,
    },
  })
  // 이걸 통해 받아온 data
  /**
   * data: {
   * access_token: 'fake_access_token',
   * token_type: 'Bearer',
   * scope: 'user'
   * }
   */
  if(!data){
    res.status(400).send('You\' not our User');
  }
  else{
    const access_token = data.data.access_token;

    // authorization_code 랑 access_token 담아서 클라이언트에 전송
    res.status(200).send({ 
      authorizationCode: authorization_code,
      accessToken: access_token 
    })
  }

}
