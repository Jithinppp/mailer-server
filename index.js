require("dotenv").config();
// modules are used to share code or files across project
// const express = require("express") this type of import called common js modules
// import express from "express" is es2015 modules that is not supported in node
const express = require("express");
// run the express to manage the req and res initiating express server to manage http req
const app = express();

// getting the home route and responds
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// listen to a port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
