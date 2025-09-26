const express = require("express");
const app = express();
const port = 3000;
const todoRoutes = require("./routes/todo.routes");
const cors = require("cors");
const adminRoutes = require("./routes/admin.routes");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
const SECRET = "supersecret";

app.use("/todos", todoRoutes);

app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from Todos!");
});

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

app.get("/auth/ping", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: "pong", user: decoded });
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Todo app is running on port ${port}`);
});
