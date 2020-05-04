const connection = require('../config/connection');
const todoQueries = require('../models/todos/todoQueries');

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const [todos] = await connection.query(todoQueries.findAllTodos);
      return res.status(200).json(todos);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.json({ error: 'You must provide text for todos '});
    }
    try {
      const [response] = await connection.query(todoQueries.addTodo, { text });
      const [todos] = await connection.query(todoQueries.findTodoById, response.insertId);
      return res.json(todos[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(todoQueries.deleteTodoById, id);
      const [todos] = await connection.query(todoQueries.findAllTodos);
      res.json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateTodoCompletedById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      const foundTodo = todos[0];
      await connection.query(todoQueries.updateTodoCompletedById, [!foundTodo.completed, id]);
      const [allTodos] = await connection.query(todoQueries.findAllTodos);
      res.json(allTodos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};
