var uuid = require('node-uuid');

function InfoDb(db){
	this.db = db;	
}
InfoDb.prototype = {
	constructor:InfoDb,
	create:function(info,cb){
		var db = this.db;	
		var id = uuid.v1();	
		var sql = 'insert into info values(?,?,?,curdate(),curdate()+interval 15 day); ';
		var values = [id,info.title,info.content];
		var q = db.query(sql,values,function(err){
			cb(err,q.sql);
		});
	},
	query:function(cb){
		var db = this.db;	
		var sql = 'select * from info;';
		var q = db.query(sql,function(err,rows){
			cb(err,rows,q.sql);
		});
	}
}
module.exports = InfoDb;
