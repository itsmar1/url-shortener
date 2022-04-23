const express = require('express');

const urlController = require('../controllers/urlController');

const router = express.Router();


router.get('/:shortId', urlController.getLongUrl);

module.exports = router;

