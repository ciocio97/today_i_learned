const router = require('express').Router();
const controller = require('./../controllers');

// GET /items Router와 Controller를 연결합니다.
router.get('/', controller.items.get);

module.exports = router;
