const request = require('request');
const apiOptions = {
	server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://cult-newsletter.herokuapp.com/';
}
let response = null;

const newsletter = function(req,res){
	const path = (apiOptions.server + "/api/news");
	const requestOptions = {
		url:path,
		method:'GET',
		json:{},
		qs:{}
	};
	response = res;
	request(path, requestOptions, renderNewsletter);
}

const renderNewsletter = function(error,value,body){
	const view = 'newsletter';
	const content = {newses:[]};
	if(body.length){
		content.newses = body;
	}

	response.render(view,content);
	response = null;
}

module.exports = {
	newsletter
}