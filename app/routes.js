var Logininfo = require('./models/logininfo');
var Pin = require('./models/location');


module.exports = function(app,passport) {
  
app.get('/api/map', function(req, res) {
    req.db.get("map").find({},{},function(e,docs){
        res.write(JSON.stringify(docs));
        console.log("e:"+e);
        res.end();
    });
});
 
app.post('/api/map', function(req, res) {
    console.log(req.body);
    req.db.get("map").insert(req.body,{w: 1},function(err, records){
        console.log("Record added as "+records._id);
        res.write(JSON.stringify(records));
        res.end();
    });
});







app.get('/start',
	function(req,res){
		res.render('start.ejs');
	}
	);

app.get('/',isLoggedIn,
	function(req,res){
		res.render('index.ejs', {
			user : req.user
		});

		console.log("current session is :" +req.session.uname);
	});




app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
	req.session = null ;
	console.log(req.session);
});

app.get('/login',
	function(req,res){
		console.log('login load');
		res.render('login.ejs', { message: req.flash('loginMessage') });
	}
	);

//************ need modify auth progress
app.post('/login',passport.authenticate('local-login', {
			successRedirect : '/#/map', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}),
	
	function(req,res){
		req.session.uname =req.body.uname;
		console.log(req.body);
		console.log(req.session);

		console.log("post Login");
		res.redirect('/profile');
	}

	);



app.get('/signup',
	function(req,res){
		console.log('signup load');
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	}
	);

app.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/#/map', // redirect to the secure profile section
	failureRedirect : '/signup', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

app.get('/unlink/local', isLoggedIn, function(req, res) {
	var user            = req.user;
	user.local.email    = undefined;
	user.local.password = undefined;
	user.save(function(err) {
		res.redirect('/profile');
	});
});
app.get('/connect/local', function(req, res) {
	res.render('connect-local.ejs', { message: req.flash('loginMessage') });
});
app.post('/connect/local', passport.authenticate('local-signup', {
	successRedirect : '/#/map', // redirect to the secure profile section
	failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));

	app.get('/api/pins', function(req, res) {
		console.log('receive get');
		Pin.find(function(err, pins) {
			if (err)
				res.send(err)
			res.json(pins); 
			console.log(pins);	//debug 
		});
	});

	app.get('/api/pins/:pin_id',function(req,res){

		console.log('receive get id');
		Pin.findById(req.params.pin_id,function(err,pins){
			if(err)
				res.send(err);
			res.json(pins);
		});
	});

	app.put('/api/pins/:pin_id',function(req, res){

		Pin.findById(req.params.pin_id,function(err, pins){
			if(err)
				res.send(err);
			console.log(pins);
			pins.pinname = req.body.pinname;
			pins.save(function(err){
				if(err)
					res.send(err);
				res.json({ message: 'pin undated!'});
			});
		});
	});


    app.post('/api/pins', function(req, res) {

        Pin.create({ 
            uname : req.body.uname,
            pinname: req.body.pinname,
            lat : req.body.lat,
            lng : req.body.lng
        }, function(err, pin) {
            if (err)
                res.send(err);

            Pin.find(function(err, pins) {
                if (err)
                    res.send(err)
                res.json(pins);
            });
        });

    });

	app.delete('/api/pins/:pin_id', function(req, res) {
		Pin.remove({
			_id : req.params.pin_id
		}, function(err, pin) {
			if (err)
				res.send(err);

			
			Pin.find(function(err, pins) {
				if (err)
					res.send(err)
				res.json(pins);
			});
		});
	});

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