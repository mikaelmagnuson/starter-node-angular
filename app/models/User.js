var mongoose = require('mongoose');

// define the user
module.exports = mongoose.model('User', {
    name: {type: String, default: ''}
});
