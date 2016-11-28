var InfoDb = require('../lib/info.js');
var mysql = require('mysql');
var uuid = require('node-uuid');

var db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'cms'
});

infoDb = new InfoDb(db);

exports.testDb = function(test) {
	test.ok(db, 'connect to mysql is error');
	test.ok(infoDb, 'create infoDb err');
	test.done();
}
exports.testCreate = function(test) {
	var info = {
		title: 'ipaji is published',
		content: 'this is a big date, my ipaji is published.Everybody can publish info on my ipaji'
	};
	infoDb.create(info,function(err,sql){
		test.ok(!err, 'insert err:' + err + ';\nsql:' + sql);
		test.done();
	});
}
exports.testQuery = function(test) {
	infoDb.query(function(err,rows,sql){
		test.ok(!err, 'query err:' + err + ';\nsql:' + sql);
		console.log(rows);
		test.done();
	});
}

