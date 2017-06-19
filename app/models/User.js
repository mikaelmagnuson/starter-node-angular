// mongoose module
var mongoose = require('mongoose');

// define the model
var User = module.exports = mongoose.model('User', {
    name: {type: String, default: ''},
    created: {type: Date, default: ''},
    last: {type: Date, default: ''},
    access: {type: String, default: 'Alpha'},
    email: {type: String, default: '', unique: true},
    phone: {type: String, default: ''}
});

// var john = new User({
//     "name": "John H",
//     "created": new Date(),
//     "last": new Date(),
//     "email": "jh@example.com",
//     "phone": "555-555-3333"
// });
//
// john.save(function (err, john) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(john._id);
// });
