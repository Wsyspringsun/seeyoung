var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/*  
data.private.push({
    title: 'Go语言环境搭建',
    good: 4,
    comment: ['Good ', 'help', 'useful'],
    url: 'go.json'
});*/
/*create*/
router.post('/', function(req, res, next) {
	var json = {title:"hello"};
	res.json(json);
});
/*read*/
router.get('/', function(req, res, next) {
		var data = [];
	res.render('info/index', data);
});
/*update*/
router.post('/:id', function(req, res, next) {
 /*   var id = req.params.id;
    var rootDir = req.app.get('rootDir');
    var dataPath = path.join(rootDir,'/data/blogs/'+id+'.json');
    fs.readFile(dataPath,'utf8',function(err,data){
        if(err) throw err;
        res.json(data);
    });*/
});
/*delete*/
router.get('/:id', function(req, res, next) {
});
/*search*/

module.exports = router;

