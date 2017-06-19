/**
 * Created by mikael on 5/27/17.
 */


var authCtrl = require('./userAuthController');
var userSettingsCtrl = require('./userSettingsController');
var User = require('../models/User');
var UserAuth = require('../models/UserAuth');
var UserSettings = require('../models/UserSettings');

var getAllUsers = module.exports.getAllUsers = function (req, res) {
    UserAuth.findOne({'authKey': req.query.authKey}, function (err, auth) {
        if (err) {
            return console.error(err);
        } else {
            User.find(function (err, users) {
                if (err) {
                    return console.error(err);
                }
                res.json(users);
            });
        }
    });
};

var deleteUser = module.exports.deleteUser = function (req, res) {
    UserAuth.findOne({'authKey': req.query.authKey}, function (err, auth) {
        if (err) {
            return console.error(err);
        } else {
            User.findOneAndRemove({"email": req.body.email}).then(function (user, err) {
                if (err) {
                    return console.error(err);
                }
                UserSettings.findOneAndRemove({"accountId": req.body.email}).then(function (settings, err) {
                    if (err) {
                        return console.error(err);
                    }
                    UserAuth.findOneAndRemove({"email": req.body.email}).then(function (auth, err) {
                        if (err) {
                            return console.error(err);
                        }
                        getAllUsers(req, res);
                    });
                });
            });
        }
    });
};

var updateUser = module.exports.updateUser = function (req, res) {
    UserAuth.findOne({'authKey': req.query.authKey}, function (err, auth) {
        if (err) {
            return console.error(err);
        } else {
            User.findOne({email: req.body.email}, function (err, user) {
                if (err) {
                    return console.error(err);
                } else {
                    if (user) {
                        user.name = req.body.name;
                        user.access = req.body.access;
                        user.phone = req.body.phone;

                        user.save(function (err, user) {
                            if (err) {
                                return console.error(err);
                            } else {
                                getAllUsers(req, res);
                            }
                        });
                    }
                    else {
                        // TODO: Make this better
                        return console.log("User not found to update");
                    }
                }
            });
        }
    });
};

var saveUser = module.exports.saveUser = function (req, res) {
    var newUser = new User({
        name: req.body.fullName,
        created: new Date(),
        last: new Date(),
        access: '',
        email: req.body.email,
        phone: req.body.phone
    });

    newUser.save(function (err, user) {
        if (err) {
            // TODO: Make this a common function and pass in type (i.e. User) for messages?
            if (err.code == 11000) {
                // the user is duplicated
                res.status(400);
                res.json({
                    "status": "bad request",
                    "message": "User with that name already exists"
                });
            }
            console.error(err);
        } else {
            var userAuth = authCtrl.makeNewUserAuth(user.email, req.body.password);
            userAuth.save(function (err, userAuth) {
                if (err) {
                    console.error(err);
                } else {
                    var userSettings = new UserSettings({
                        "email": user.email
                        // "initialLat": 37.7749,
                        // "initialLon": -122.4194
                    });
                    userSettings.save(function (err, settings) {
                        if (err) {
                            return console.error(err);
                        } else {
                            // todo: take this out and just return success... then request new all users from client
                            getAllUsers(req, res);
                        }
                    });
                }
            });
        }
    });
};