// modules are used to share code or files across project
// const express = require("express") this type of import called common js modules
// import express from "express" is es2015 modules that is not supported in node
// import express from "express";
const express = require("express");
// run the express to manage the req and res
const app = express();

// getting the home route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// listen to a port
app.listen(5000);
