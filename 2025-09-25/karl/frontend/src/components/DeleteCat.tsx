import {Button} from "@mui/material";
// import React, { useState } from "react";

type DeleteCatProps = {
  id: string;
  fetchCats: () => void;
};

const DeleteCat = ({ id, fetchCats }: DeleteCatProps) => {
  const deleteCat = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Deleted", id);
        fetchCats();
        // Snackbar success
      } else {
        console.warn("Something went wrong ");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <Button variant="contained" color="error" onClick={deleteCat}>
      Delete
    </Button>
  );
};

export default DeleteCat;