var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('demo/index');
});
router.get('/chat', function(req, res, next) {
    res.render('demo/chat.ejs');
});
router.get('/snake', function(req, res, next) {
    res.render('demo/snake.ejs');
});
router.get('/flv', function(req, res, next) {
    res.render('demo/flv.ejs');
});
router.get('/flv/play', function(req, res, next) {
	var dir = req.app.get('rootDir')+'/'+'public/video/p.mp4';
	console.log(dir);
	fs.readFile(dir).pipe(req);
});

module.exports = router;

