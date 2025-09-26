import { Box, Button, Stack, TextField, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

type UpdateTodoProps = {
  id: string;
  currentTitle: string;
  currentCompleted: boolean;
  fetchTodos: () => void;
};

const UpdateTodo = ({ id, currentTitle, currentCompleted, fetchTodos }: UpdateTodoProps) => {
  const [title, setTitle] = useState(currentTitle);
  const [completed, setCompleted] = useState(currentCompleted);

  const updateTodo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed }),
      });

      if (response.ok) {
        console.log("Todo updated");
        fetchTodos(); // refresh list
      } else {
        console.warn("Failed to update todo");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateTodo();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            label="Edit title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={(event) => setCompleted(event.target.checked)}
              />
            }
            label="Completed"
          />
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateTodo;
