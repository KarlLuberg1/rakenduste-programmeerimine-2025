const express = require("express");
const app = express();
const port = 3000;
const todoRoutes = require("./routes/todo.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from Todos!");
});

app.listen(port, () => {
  console.log(`Todo app is running on port ${port}`);
});
