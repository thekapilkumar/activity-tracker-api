const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todoList', todoSchema);
module.exports = Todo;