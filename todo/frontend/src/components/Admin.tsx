import { Box, List, Button, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import SubmitTodo from "./AddTodo.tsx";
// import DeleteTodo from "./DeleteTodo.tsx";
// import UpdateTodo from "./UpdateTodo.tsx";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Admin = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/admin/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleDeleted = async (id: string) => {
    await fetch(`http://localhost:3000/admin/todos/${id}/toggle`, {
      method: "PATCH",
    });
    fetchTodos();
  };

  return (
    <Box>
      <Typography variant="h4">Admin panel:</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            {todo.title} — {todo.deleted ? "Deleted" : "Active"}
            <Button
              onClick={() => toggleDeleted(todo.id)}
              variant="contained"
              color={todo.deleted ? "success" : "error"}
              sx={{ ml: 2 }}
            >
              {todo.deleted ? "Restore" : "Delete"}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Admin;
