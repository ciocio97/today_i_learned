// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { Users } = require('../../models');
const session = require('express-session');

module.exports = {
  post: async (req, res) => {
    // userInfo는 유저정보가 데이터베이스에 존재하고, 완벽히 일치하는 경우에만 데이터가 존재합니다.
    // 만약 userInfo가 NULL 혹은 빈 객체라면 전달받은 유저정보가 데이터베이스에 존재하는지 확인해 보세요
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    
    // console.log(userInfo.dataValues.userId);
    // TODO: userInfo 결과 존재 여부에 따라 응답을 구현하세요.

    // 결과가 존재하는 경우 세션 객체에 userId가 저장되어야 합니다.
    if (!userInfo) {
      // your code here
      res.status(401).send({ data: null, message: 'not authorized' });
    } else {
      // your code here
      // HINT: req.session을 사용하세요.
      req.session.session_id = userInfo;
      // 굳이 이렇게 save 메서드를 사용해서 저장했는지 안했는지 체크해야 하나요 ?
      // req.session.save(function(err){
      //   if(err) res.status(404).send({ data: null, message: 'fail to save' });
      //   res.status(200).send({ data: result, message: 'ok' });
      // })
      // save로 저장후 실행해야하는 동작 적을 수 있음 **
      req.session.save(function(err){
        if(err) throw Error;
        res.status(200).send({ data: userInfo, message: 'ok' });
        // 또는 res.redirect('/') 저장 후 원래 페이지로 돌아갈 수도 있어 !
      });
    }
  }
}