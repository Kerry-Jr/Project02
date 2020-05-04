// Get todos
const findAllTodos = 'SELECT * FROM todos;';
const findAllCompleted = 'SELECT * FROM todos WHERE completed = true;';
const findAllIncomplete = 'SELECT * FROM todos WHERE completed = false;';

const findTodoById = 'SELECT * FROM todos WHERE id  = ?;';


// Adding todos
const addTodo = 'INSERT INTO todos SET ?;';


// Deleting todos
const deleteTodoById = 'DELETE FROM todos WHERE id = ?;';

// Updating todos
const updateTodoCompletedById = 'UPDATE todos SET completed = ? WHERE id = ?;';
const updateTodoTextById = 'UPDATE todos SET text = ? WHERE id = ?;';



module.exports = {
  findAllTodos,
  findAllCompleted,
  findAllIncomplete,
  findTodoById,
  addTodo,
  deleteTodoById,
  updateTodoTextById,
  updateTodoCompletedById,
};
