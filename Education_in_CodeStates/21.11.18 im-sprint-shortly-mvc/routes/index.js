const express = require('express');
const router = express.Router();
const app = express();

const linksRouter = require('./links');

app.use('links', linksRouter); 

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
