/** @format */

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const path = require('path');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on port localhost:${PORT}!`);
  });
});
