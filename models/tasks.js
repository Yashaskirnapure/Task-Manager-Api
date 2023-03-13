const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    task: {
        type : String,
        required : [true, "please provide value"],
        trim : true,
        maxLength : [20, "no more than 20 characters"]
    },
    completed: {
        type : Boolean,
        default : false
    }
});
const Task = mongoose.model('Task', TaskSchema);

module.exports = {Task};