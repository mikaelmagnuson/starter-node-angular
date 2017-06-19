/**
 * Created by Mikael on 12/17/2016.
 */

var UserAuth = require('../models/UserAuth');
var UserSettings = require('../models/UserSettings');

var getUserSettings = module.exports.getUserSettings = function(req, res) {
    // UserAuth.findOne({"authKey": req.query.authKey}, function(err, auth) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         UserSettings.findOne({'accountId': auth.email}, function(err, settings) {
    //             if (err) {
    //                 console.error(err);
    //             } else {
    //                 res.json(settings);
    //             }
    //         });
    //     }
    // });
};

var updateUserSettings = module.exports.updateUserSettings = function(req, res) {
    // UserAuth.findOne({"authKey": req.query.authKey}, function(err, auth) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         UserSettings.findOne({'accountId': auth.email}, function(err, settings) {
    //             if (err) {
    //                 console.error(err);
    //             } else {
                    // TODO: Update settings here
                    //
                    // settings.save(function (err, savedSettings) {
                    //     if (err) {
                    //         return console.error(err);
                    //     } else {
                    //         console.log(savedSettings._id);
                    //         res.json(savedSettings);
                    //     }
                    // });
    //             }
    //         });
    //     }
    // });
};

var makeNewUserSettings = module.exports.makeNewUserSettings = function(email){
    // return new UserSettings({
    //     email: email,
    //     initialLat: 37.7749,
    //     initialLon: -122.4194
    // });
};