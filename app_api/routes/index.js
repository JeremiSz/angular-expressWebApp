const express = require('express');
const router = express.Router();
const ctrlNews = require('../controllers/news');
const ctrlAccounts = require('../controllers/accounts');
  
//news
router
	.route('/news')
	.get(ctrlNews.newsGetAll)

router
	.route('/account')
	.get(ctrlAccounts.checkPassword)
	.post(ctrlAccounts.createAccount);

module.exports = router;