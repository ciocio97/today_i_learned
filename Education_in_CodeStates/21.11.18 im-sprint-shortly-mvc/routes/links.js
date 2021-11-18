const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links');

/* GET links listing. */
router.get('/', linksController.get);
router.post('/', linksController.post);
router.get('/:id', linksController.redirect);

module.exports = router;
