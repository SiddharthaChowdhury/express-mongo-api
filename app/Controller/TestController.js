
const Test = require('../Model/Test.js');
module.exports = {
	test: function(req, res){
		const _test = new Test({ hello: 'World' });
		_test.save(function(err, data){
			if(err) console.log(err)
			return res.json(data)
		});
	},

	testFind: function(req, res){
		Test.find({_id: '5ab4a7296a78c81cf8d1e719'}, function(err, data){
			if(err) return res.json(err);
			return res.json(data);
		})
	}
}
