# express-mongo-MVC-boilerplate
express.js + mongodb boilerplate for API creation (configured for MVC patthern)

## Requirement 

1. You need a mongodb ready, with - username, password and database name
2. Database configuration is in ./app/app.js file check lines [12 - 19] 
3. Make sure you username or password doesnt contain '@' (will lead to connection error!)
4. Also if you are using [mlab](https://mlab.com/), make sure you create a new "User" for your database
5. And dont forget to remove `.git` directory if your going to use this boilerplate

### Controllers

    // Example: TestController.js
    const Test = require('../Model/Test.js'); // To query 'Test' schema if needed.
    module.exports = {
	    ping: function(req, res){
	 	        res.status(200);
            return res.json({'hello': 'world!'})
	    },
    }

### Models

    // Example:  Test.js
    // Keep the name name of this model and the file name same (in this case 'Test')
    const _name = 'Test' // Name of this Model
    const _schema = {
	      attr: String,
    }
    module.exports = require('mongoose').model(_name, _schema);
  
### Route

      // Example:

      module.exports = ($,C) =>{
      /*
      * $ - Route variable
      * C - Holds all the Controllers defined in ./app/Controller/ directory (by filename)
      *
      *	Please define the nodes below.
       * -----------------------------
      */

    	  $.get('/rest/create-account', function(req, res, next){
    		  C.TestController.ping(req, res, next);
    	  })
    
      
      return $;}

## Easy avatar@ 

https://robohash.org/anystring
