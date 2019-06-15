var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CourseSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('courses', CourseSchema);