import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type AddTodoProps = {
  fetchTodos: () => void;
};

const AddTodo = ({ fetchTodos }: AddTodoProps) => {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        console.log("Todo added");
        fetchTodos();
      } else {
        console.warn("Failed to add todo");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo();
    setTitle("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Todo title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddTodo;
