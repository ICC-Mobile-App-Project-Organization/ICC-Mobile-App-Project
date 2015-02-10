var Logininfo = require('./models/logininfo');



module.exports = function(app,passport) {

app.post('/login',
	
	function(req,res){
		req.session.uname =req.body.uname;
		console.log(req.body);
		console.log("post Login");
		res.redirect('/#/dashboard');
	}

	);

app.get('/login',
	function(req,res){
		console.log('receive get');
		res.sendfile('public/login.html');
	}
	);

	app.get('/api/logininfos', function(req, res) {
		console.log('receive get');
		Logininfo.find(function(err, logininfos) {
			if (err)
				res.send(err)
			
			res.json(logininfos); 
			console.log(logininfos);	//debug 
		});
	});

    app.post('/api/logininfos', function(req, res) {

        Logininfo.create({
            uname : req.body.uname,
            email : req.body.email,
            upsd : req.body.upsd
        }, function(err, logininfo) {
            if (err)
                res.send(err);

            Logininfo.find(function(err, logininfos) {
                if (err)
                    res.send(err)
                res.json(logininfos);
            });
        });

    });

	app.delete('/api/logininfos/:logininfo_id', function(req, res) {
		Logininfo.remove({
			_id : req.params.logininfo_id
		}, function(err, logininfo) {
			if (err)
				res.send(err);

			
			Logininfo.find(function(err, logininfos) {
				if (err)
					res.send(err)
				res.json(logininfos);
			});
		});
	});

};
