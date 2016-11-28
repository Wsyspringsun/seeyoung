var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Score = mongoose.model('Score', {
    username: String,
    score: Number,
    date: Date
});

router.get('/', function(req, res, next) {
    Score.find().limit(10).exec((err, users) => {
        if (err) throw err;
        res.render('snake/snake', {
            users: users
        });
    });
});
router.get('/mulsnake', function(req, res, next) {
    res.render('snake/mulsnake');
});

router.get('/', function(req, res, next) {
    Score.find().limit(10).exec((err, users) => {
        if (err) throw err;
        res.render('snake/snake', {
            users: users
        });
    });
});
router.post('/score', function(req, res, next) {
	var userinfo = req.body;
	userinfo.date = new Date();
	//save a user score to mongodb

    var userinfoModel = new Score(userinfo);
	userinfoModel.save((err)=>{
        if(err) throw err;
        res.redirect('/');
    });

});

module.exports = router;

