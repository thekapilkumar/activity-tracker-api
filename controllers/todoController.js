const Todo = require("../models/todo");

const addTodo = async (req, res) => {
    try {
        const { task, description } = req.body;
        const todo = new Todo({
            task,
            description
        });
        await todo.save();
        return res.status(200).json({
            status: true,
            message: "Added Successfully...",
            data: todo
        });
    } catch (err) {
        console.error('Add todo error:', err);
        return res.status(500).json({
            status: false,
            message: "Can not add todo...",
            error: err
        });
    }
};

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        return res.status(200).json({
            status: true,
            message: "Todo found...",
            data: todos
        });
    } catch (err) {
        console.error('Fetch todos error:', err);
        return res.status(500).json({
            status: false,
            message: "Todo not found...",
            error: err
        });
    }
};

module.exports = { addTodo, getTodo };
