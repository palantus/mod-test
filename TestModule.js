var TestModule = function () {
};

TestModule.prototype.init = function(fw, onFinished) {
    this.fw = fw;
	onFinished.call(this);
}

TestModule.prototype.onMessage = function (req, callback) {
	this.fw.modules["database"].run({table:"Users", action: "query", query: "user:ahk"}, function(res){
		callback(res);
	});
};
 
module.exports = TestModule;