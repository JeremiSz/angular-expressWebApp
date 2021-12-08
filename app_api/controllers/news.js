const mongoose = require('mongoose');
const News = mongoose.model('Newes');

const newsGetAll = function (req,res){
	return News.find()
		.then( (err,value) =>{
			if (err)
				res.status(500).json(err);
			else
				return value;
		})
		.then((value => {
			res
				.status(200)
				.json(value);
		}));
};

module.exports = {
  newsGetAll
};
