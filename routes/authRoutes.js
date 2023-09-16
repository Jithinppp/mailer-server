const passport = require("passport");

module.exports = (app) => {
  // 2.route for authentication google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // what kind of access we want from the google
      scope: ["profile", "email"],
    })
  );
  // 3.route for authentication callback route
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.send("auth ok");
    }
  );
  // route for logout
  app.get("/api/logout", (req, res) => {
    // passport automatically add logout() to the request after authentication
    // kills the cookie
    req.logout();
    res.send(req.user);
  });
  // route for current user
  app.get("/api/current_user", (req, res) => {
    // the passport automatically add the user into any request after authentication
    res.send(req.user);
  });
};
