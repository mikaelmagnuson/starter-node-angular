/**
 * Created by mikael on 5/27/17.
 */
var mongoose = require('mongoose');

// define the user
module.exports = mongoose.model('UserAuth', {
    email: {type: String, default: ''},
    password: {type: String, default: ''}
});
