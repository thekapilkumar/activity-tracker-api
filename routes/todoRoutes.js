const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/addTodo', todoController.addTodo);
router.get('/getTodo', todoController.getTodo);
router.delete('/deleteTodo/:id', todoController.deleteTodo);
router.patch('/updateTodo/:id', todoController.updateTodo);

module.exports = router;