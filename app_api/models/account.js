const mongoose = require('mongoose');

const news_schema = new mongoose.Schema({
	"account": {
		type : String,
		required : true,
	},
	"password" :{
		type: String,
		required : true
	},
	"email" : {
		type : String,
		required: true
	}
	
});

mongoose.model('Accounts',news_schema);