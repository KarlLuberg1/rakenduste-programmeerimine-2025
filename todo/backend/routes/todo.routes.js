const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.post(
  "/",
  body("title")
    .notEmpty()
    .withMessage("title cannot be empty")
    .isString()
    .withMessage("title must be a string"),
  todoController.create
);

router.put(
  "/:id",
  body("title")
    .optional()
    .notEmpty()
    .withMessage("title cannot be empty")
    .isString()
    .withMessage("title must be a string"),
  todoController.update
);

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
