function Test(){
	this.requiredPermission = "admin";
}

Test.prototype.handleInsert = function(db, record, callback){
	if(record === undefined){
		callback({error: "Ingen record at indsætte"});
		return;
	}
	
	db.query("INSERT INTO Test(id) VALUES(?)", [record.id], function(res){
		callback({success:true});
	});
}

Test.prototype.handleQuery = function(db, query, callback){
	db.query("CREATE TABLE Test(id int)", function(res){
		callback([{test: "hej med dig"}]);
	});
}
		
exports = module.exports = Test;