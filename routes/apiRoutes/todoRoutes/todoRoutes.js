const router = require('express').Router();
// /api/todos prepended to every route inside of here
const todosController = require('../../../controllers/todosController');

// /api/todos
router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo);

// /api/todos/:id
router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById)
  .patch(todosController.updateTodoCompletedById);

module.exports = router;

