const express = require("express");
const tasks = require("./tasks");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const viewRouter = require("../list-view-router.js");
const editRouter = require("../list-edit-router.js");
app.use(express.json());

//Responder con mi array [tasks] en formato JSON en mi servidor
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

const JWT_SECRET = process.env.SECRET_KEY;

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);

  res.json({ token });
});

app.get("/protected", (req, res) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: "Invalid Token" });
    }

    res.json({ message: "Token validated", decoded });
  });
});

app.use("/editTasks", editRouter);
app.use("/viewTasks", viewRouter);

app.listen(3000, () => {
  console.log(`http://localhost:${3000}`);
});
