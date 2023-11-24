const { url: urlModel } = require('../../models');  // 실제 실행파일은 index.js 이기 때문에
const utils = require('../../modules/utils');

console.log(urlModel);

module.exports = {
  get: async(req, res) => {
    const result = await urlModel.findAll();
    res.status(200).json(result);
  },
  post: (req, res) => {
    // req.body.url -> urls 테이블에서 url 필드에 저장하기
    const { url } = req.body;

    if(!utils.isValidUrl(url)){
      return res.status(400).send();
    }

    utils.getUrlTitle(url, (err, title) => {
      if(err){
        return res.status(400).send();
      }

      urlModel.create({
        url: url,
        title: title
      })
      .then(result => res.status(201).json(result));
    })
  },
  redirect: (req, res) => {
    
    urlModel.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      if(result){
        const newOne = result.update({
          visits: result.visits + 1
        });
        return newOne;
      }
      else{
        res.status(204).send();
      }
    })
    .then(result => {
      res.redirect(result.url);
    })
    .catch(error => {
      res.status(500).send();
    })
  } 
};