var userController = require('./controllers/userController');

module.exports = function(app) {

	// server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/v1/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.post('/v1/user', function(req, res) {
        console.log("Creating a new user");
        userController.saveUser(req, res);
    });

    app.post('/v1/event', function(req, res) {
        res.send('success!');
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to login or register page
    app.get('/login', function(req, res) {
        res.sendfile('./public/account.html');
    });

	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};