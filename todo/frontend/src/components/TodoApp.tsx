import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./AddTodo.tsx";
import DeleteTodo from "./DeleteTodo.tsx";
import UpdateTodo from "./UpdateTodo.tsx";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Todos</Typography>
      <TodoList todos={todos} fetchTodos={fetchTodos} />
      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

type TodoListProps = {
  todos: Todo[];
  fetchTodos: () => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, fetchTodos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {JSON.stringify(todo)}
          <UpdateTodo
            id={todo.id}
            currentTitle={todo.title}
            currentCompleted={todo.completed}
            fetchTodos={fetchTodos}
          />
          <DeleteTodo id={todo.id} fetchTodos={fetchTodos} />
        </ListItem>
      ))}
    </List>
  );
};


export default Todo;
