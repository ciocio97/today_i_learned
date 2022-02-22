const images = require('../resources/resources');

module.exports = (req, res) => {
  // TODO : Mypage로부터 access token을 제대로 받아온 것이 맞다면, resource server의 images를 클라이언트로 보내주세요.
  const authorization = req.headers.authorization;
  if(!authorization){
    res.status(403).send({ message: 'no permission to access resources' });
  }
  else{
    res.status(200).send({ images: images });
  }
}