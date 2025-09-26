const { todos } = require("./todo.controller");

exports.readAll = (req, res) => {
  res.json(todos);
}

exports.toggleDeleted = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === id);

  todo.deleted = !todo.deleted;
  todo.updatedAt = Date.now();
  
  res.json(todo);
}