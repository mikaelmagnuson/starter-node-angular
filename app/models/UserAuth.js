/**
 * Created by Mikael on 12/11/2016.
 */

// mongoose module
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// define the model
module.exports = UserAuth = mongoose.model('UserAuth', {
    email: {type: String, default: '', unique: true},
    password: {type: String, default: ''},
    authKey: {type: String, default: ''},
    expires: {type: Date, default: ''}
});

// var hashPassword = function(password, rounds, bcrypt) {
//     return bcrypt.hashSync(password, rounds);
// };
//
// var generateGUID = function() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//         return v.toString(16);
//     });
// };
//
// var createUsers = function(bcrypt) {
//     var hash = hashPassword('supersecret', 10, bcrypt);
//
//     var john = new UserAuth({
//         email: "jh@example.com",
//         password: hash,
//         authKey: generateGUID(),
//         expires: new Date().getDate() + 7
//     });
//
//     john.save(function(err, john) {
//         if (err) {
//             return console.error("Saving John: " + err);
//         }
//         console.log(john.email);
//     });
// };
//
// createUsers(bcrypt);
