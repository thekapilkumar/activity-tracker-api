const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    valueAddChecks: {
        check1: {
            type: Boolean
        },
        check2: {
            type: Boolean
        },
        check3: {
            type: Boolean
        },
        check4: {
            type: Boolean
        }
    },
    actionItemStatus: {
        type: String
    },
});

const Todo = mongoose.model('todoList', todoSchema);
module.exports = Todo;