import "./App.css";
import Todo from "./components/TodoApp";
// import { Box, List, ListItem, Typography } from "@mui/material";
import Admin from "./components/Admin";



function App() {

  return (
    <div className="App">
      <Todo />
      <Admin />
    </div>
  );
}

export default App;
