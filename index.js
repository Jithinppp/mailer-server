const express = require("express");
require("dotenv").config();
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

// create the express instance to manage http requests
const app = express();

authRoutes(app);

// listen to a port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
