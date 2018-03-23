module.exports = ($,C) =>{
/*
*	Please define the nodes below.
*/
	$.get('/', function(req, res){
		res.status('200');
		return res.json({hello: "World!"})
	})
	$.get('/test', function(req, res, next){
		C.TestController.test(req, res, next);
	})

	$.get('/test-find', function(req, res, next){
		C.TestController.testFind(req, res, next);
	})


/*
*	 Define routes above
*/
return $;}