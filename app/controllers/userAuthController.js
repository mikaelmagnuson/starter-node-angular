/**
 * Created by mikael on 5/27/17.
 */
var UserAuth = require('../models/UserAuth');
var bcrypt = require('bcrypt');
var User = require('../models/User');

module.exports.auth = function(req, res) {
    UserAuth.findOne({email: req.body.email}).then(function (auth, err) {
        if (err) {
            res.send(err);
        }

        if (auth == null) {
            res.status(401);
            res.json({
                "status": "unauthorized",
                "message": "email or password incorrect"
            });
        }

        if(bcrypt.compareSync(req.body.password, auth.password)) {
            if (new Date().getDate() < auth.expires) {
                res.json({
                    "email": auth.email,
                    "authKey": auth.authKey,
                    "expires": auth.expires
                });

                // update the user's "last seen" time.
                User.findOne({email: auth.email}).then(function (user, err) {
                    if (err) {
                        return console.error(err);
                    } else {
                        user.last = new Date();
                        user.save(function (err, john) {
                            if (err) {
                                return console.error(err);
                            }
                            console.log("User " + user._id + " updated new Last Seen time");
                        });
                    }
                });
            } else {
                res.status(403);
                res.json({
                    "status": "forbidden",
                    "message": "authKeyExpired"
                });
            }
        } else {
            res.status(401);
            res.json({
                "status": "unauthorized",
                "message": "email or password incorrect"
            });
        };
    });
};

module.exports.validateAuthKey = function(req, res) {
    UserAuth.findOne({'authKey' : req.query.authKey}, function(err, auth) {
        if (err) {
            return console.error(err)
        }
    });
};

module.exports.makeNewUserAuth = function(email, password) {
    var hash = hashPassword(password, 10, bcrypt);
    var guid = generateGUID();

    return new UserAuth({
        email: email,
        password: hash,
        authKey: guid,
        expires: new Date().getDate() + 7
    });
};

var hashPassword = function(password, rounds, bcrypt) {
    return bcrypt.hashSync(password, rounds);
};

var generateGUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};
