/* eslint-disable */
const express = require('express');
const router = express.Router();
const { todoController, errorHandler } = require('./todoController.js');

router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

router.use(errorHandler);

module.exports = router;
