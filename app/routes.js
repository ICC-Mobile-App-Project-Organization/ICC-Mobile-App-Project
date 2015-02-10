var Logininfo = require('./models/logininfo');



module.exports = function(app,passport) {


app.get('/',
	function(req,res){
		res.sendfile('public/index.html');
	}
	);

app.get('/profile',
	function(req,res){
		res.sendfile('public/profile.html');
		console.log("current session is :" +req.session.uname);
		
	}
	);

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
	req.session = null ;
	console.log(req.session);
});


app.post('/login',
	
	function(req,res){
		req.session.uname =req.body.uname;
		console.log(req.body);
		console.log(req.session);

		console.log("post Login");
		res.redirect('/profile');
	}

	);

app.get('/login',
	function(req,res){
		console.log('login load');
		res.sendfile('public/login.html');
	}
	);

app.get('/signup',
	function(req,res){
		console.log('signup load');
		res.sendfile('public/signup.html');
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



function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}