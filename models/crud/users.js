module.exports = function(router, mongoOp) {
	router.get("/",function(req,res){
	    res.json({"error" : false,"message" : "Hello World"});
	});

	router.route("/users")
	    .get(function(req,res){
	        var response = {};
	        mongoOp.find({},function(err,data){
	            if(err) {
	                response = {"error" : true,"message" : "Error fetching data"};
	            } else {
	                response = {"error" : false,"message" : data};
	            }
	            res.json(response);
	        });
	    }).post(function(req,res){
	        var db = new mongoOp();
	        var response = {};

	        db.email = req.body.email; 
	        db.username = req.body.username;
	        db.password =  require('crypto')
	                          .createHash('sha1')
	                          .update(req.body.password)
	                          .digest('base64');
	        db.save(function(err){
	            if(err) {
	                response = {"error" : true,"message" : "Error adding data"};
	            } else {
	                response = {"error" : false,"message" : "Data added"};
	            }
	            res.json(response);
	        });
	    });

	router.route("/users/:id")
	    .get(function(req,res){
	        var response = {};
	        mongoOp.findById(req.params.id,function(err,data){
	            if(err) {
	                response = {"error" : true,"message" : "Error fetching data"};
	            } else {
	                response = {"error" : false,"message" : data};
	            }
	            res.json(response);
	        });
	    })
	    .put(function(req,res){
	        var response = {};
	        mongoOp.findById(req.params.id,function(err,data){
	            if(err) {
	                response = {"error" : true,"message" : "Error fetching data"};
	            } else {
	                if(req.body.email !== undefined) {
	                    data.email = req.body.email;
	                }
	                if(req.body.username !== undefined) {
	                    data.username = req.body.username;
	                }
	                if(req.body.password !== undefined) {
	                    data.password = req.body.password;
	                }
	                data.save(function(err){
	                    if(err) {
	                        response = {"error" : true,"message" : "Error updating data"};
	                    } else {
	                        response = {"error" : false,"message" : "Data is updated for "+req.params.id};
	                    }
	                    res.json(response);
	                })
	            }
	        });
	    })
	    .delete(function(req,res){
	        var response = {};
	        mongoOp.findById(req.params.id,function(err,data){
	            if(err) {
	                response = {"error" : true,"message" : "Error fetching data"};
	            } else {
	                mongoOp.remove({_id : req.params.id},function(err){
	                    if(err) {
	                        response = {"error" : true,"message" : "Error deleting data"};
	                    } else {
	                        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
	                    }
	                    res.json(response);
	                });
	            }
	        });
	    });
}