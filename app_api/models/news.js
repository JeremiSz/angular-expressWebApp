const mongoose = require('mongoose');


const news_schema = new mongoose.Schema({
	img: {
		type : String,
		required : true,
	},
	alt :{
		type: String,
		required : true
	},
	title : {
		type : String,
		required: true
	}
});

mongoose.model('Newes',news_schema);