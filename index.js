// packages
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// others
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

// connect to mongoose
mongoose.connect(keys.mongoURI);

// create the express instance to manage http requests
const app = express();

// tell express use cookie-session in our app
app.use(
  cookieSession({
    // how long cookie can exist inside browser before expires (in milliseconds)
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt cookie to prevent external change to cookie
    keys: [keys.cookieKey],
  })
);

// tell passport to use cookies and session
app.use(passport.initialize());
app.use(passport.session());

// for auth routes
authRoutes(app);

// listen to a port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
