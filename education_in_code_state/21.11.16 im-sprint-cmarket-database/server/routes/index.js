const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');
const usersRouter = require('./users');

// TODO: Endpoint에 따라 적절한 Router로 연결해야 합니다.
router.use('/items', itemsRouter);
router.use('/users', usersRouter);

module.exports = router;
