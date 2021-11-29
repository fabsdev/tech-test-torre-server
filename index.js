const express = require("express");
const cors = require("cors");

//Express Server
const app = express();
const apiRouter = require("./src/routes/api");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRouter);

//First route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend server of Torre User Skills" });
});

//Port
app.listen(3000, () => {
  console.log("3000 Port executing...");
});
