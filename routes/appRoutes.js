const express = require('express');
const appController = require('../controllers/appController')

const router = express.Router();

router.get('/', appController.getIndex);

router.get('/sign-in', appController.getLogin);

router.get('/sign-up', appController.getSignup );

module.exports = router;