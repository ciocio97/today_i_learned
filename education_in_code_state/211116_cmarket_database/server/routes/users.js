const router = require('express').Router();
const controller = require('./../controllers');

router.get('/:userId/orders', controller.orders.get);
router.post('/:userId/orders', controller.orders.post);

module.exports = router;