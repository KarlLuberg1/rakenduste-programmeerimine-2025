import { Button } from "@mui/material";

type DeleteTodoProps = {
  id: string;
  fetchTodos: () => void;
};

const DeleteTodo = ({ id, fetchTodos }: DeleteTodoProps) => {
  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Deleted", id);
        fetchTodos();
      } else {
        console.warn("Failed to delete todo");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={deleteTodo}>
      Delete
    </Button>
  );
};

export default DeleteTodo;
