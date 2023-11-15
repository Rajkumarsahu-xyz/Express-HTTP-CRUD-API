/* eslint-disable */
const Todo = require('./todo.js');
const yup = require('yup');

// Validation schema using Yup
const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean(),
});

const errorHandler = (err, req, res, next) => {
  if (err instanceof yup.ValidationError) {
    res.status(400).json({ message: 'Validation Error', errors: err.errors });
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const todoController = {
  getAllTodos: async (req, res, next) => {
    try {
      const todos = await Todo.findAll();
      res.json({ todos });
    } catch (error) {
      next(error);
    }
  },

  getTodoById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    } catch (error) {
      next(error);
    }
  },

  createTodo: async (req, res, next) => {
    try {
      await todoSchema.validate(req.body);
      const { text, isCompleted } = req.body;
      const newTodo = await Todo.create({ text, isCompleted });
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  },

  updateTodo: async (req, res, next) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (todo) {
        await todoSchema.validate(req.body);
        const { text, isCompleted } = req.body;
        const updatedTodo = await todo.update({ text, isCompleted });
        res.json(updatedTodo);
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    } catch (error) {
      next(error);
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Not Found' });
    }
  },
};

module.exports = { todoController, errorHandler };
