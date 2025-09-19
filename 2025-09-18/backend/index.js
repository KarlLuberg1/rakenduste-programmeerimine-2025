const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Karl!");
});

app.post("/Karl", (req, res) => {
  res.send("Got a POST request at /Karl");
});

app.put("/Karl", (req, res) => {
  res.send("Got a PUT request at /Karl");
});

app.delete("/Karl", (req, res) => {
  res.send("Got a DELETE request at /Karl");
});

app.get("/students/:studentId/tests/:testId", (req, res) => {
  res.send(
    `Student ID: ${req.params.studentId}, Test ID: ${req.params.testId}`
  );
});

app.get("/cars/:make-:model", (req, res) => {
  res.send(`Car: ${req.params.make}, Model: ${req.params.model}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
