const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');

//creates an account
//needs username, password, email
const createAccount = function(req,res){
    if(!req || !req.query || !req.query.username || !req.query.password || !req.query.email)
       return respond({error:"not enough parameters"},res,401);
    else {
        const account = {"account": req.query.username, "password": req.query.password, "email": req.query.email};
        return Accounts.create(account)
            .then( () => respond({"account":"created"},res,200));
    }
}
//checks if login is is correct
//needs username and passwords as queries
const checkPassword = function (req, res){
    if(!req || !req.query || !req.query.username || !req.query.password)
        return respond({error:"no parameters"},res,401);
    else {
        return Accounts.findOne({"username": req.query.username}, 'password')
            .then((value) => {
                const result = {valid: (value.password === req.query.password)};
                respond(result,res,200);
            });
    }
}
//creates data to send back once complete
function respond(content,res,status){
    res.status(status).json(content);
}

module.exports = {
    createAccount,
    checkPassword
};