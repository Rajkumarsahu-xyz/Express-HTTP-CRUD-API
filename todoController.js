const Todo = require("./todo.js");
const yup = require("yup");

// Validation schema using Yup
const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean(),
});

const todoController = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.findAll();
    res.json({ todos });
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "not found" });
    }
  },

  createTodo: async (req, res) => {
    try {
      await todoSchema.validate(req.body);
      const { text, iscompleted } = req.body;
      const newTodo = await Todo.create({ text, iscompleted });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(400).json({ message: "Bad Request", error: error.message });
    }
  },

  updateTodo: async (req, res) => {
    const { id } = req.params;
    try {
      await todoSchema.validate(req.body);
      const { text, iscompleted } = req.body;
      const updatedTodo = await Todo.update(
        { text, iscompleted },
        { where: { id }, returning: true }
      );
      res.json(updatedTodo[1][0]);
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "not found" });
    }
  },
};

module.exports = todoController;
