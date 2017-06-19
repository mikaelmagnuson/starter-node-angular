/**
 * Created by Mikael on 12/17/2016.
 */

var mongoose = require('mongoose');

var UserSettings = module.exports = mongoose.model('UserSettings', {
    email: {type: String, default: '', unique: true}
});

// var john = new UserSettings({
//     "accountId": "jh@example.com",
//     "initialLat": 37.7749,
//     "initialLon": -122.4194
// });
//
// john.save(function (err, john) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(john._id);
// });

