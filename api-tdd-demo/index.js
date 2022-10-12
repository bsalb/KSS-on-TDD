const express = require("express");
const app = express();

//routes
const routes = require("./routes");

//middleware
app.use(express.json());

app.use("/api", routes);

const Port = 5000;
const server = app.listen(Port, () =>
  console.log(`Server running on port:${Port}`)
);

module.exports = server;
