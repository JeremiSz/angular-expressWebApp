const express = require('express');
const router = express.Router();

const ctrlAccount = require("../controllers/account.js");
const ctrlContent = require("../controllers/content.js");

/* Account Controller*/
router.get('/', ctrlAccount.login);
router.get('/register',ctrlAccount.register);

/*Content Controller*/
router.get('/newsletter',ctrlContent.newsletter);

module.exports = router;
