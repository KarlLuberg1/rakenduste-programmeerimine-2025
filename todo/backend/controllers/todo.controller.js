const crypto = require("crypto");
const { validationResult, matchedData } = require("express-validator");

const todos = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    title: "first todo",
    completed: false,
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    title: "second todo",
    completed: false,
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.todos = todos;

exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);

  const newTodo = {
    id: crypto.randomUUID(),
    title: data.title,
    completed: false,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.read = (req, res) => {
  res.json(todos.filter((t) => !t.deleted));
};

exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);
  const { id } = req.params;

  let todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  if (data.title !== undefined) todo.title = data.title;
  if (req.body.completed !== undefined) todo.completed = req.body.completed;

  todo.updatedAt = Date.now();

  res.json(todo);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  let todo = todos.find((t) => t.id === id);

  todo.deleted = true;
  todo.updatedAt = Date.now();

  res.json(todo);
};
