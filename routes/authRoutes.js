const passport = require("passport");

module.exports = (app) => {
  // 2.route for authentication
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // what kind of access we want from the google
      scope: ["profile", "email"],
    })
  );
  // 3.handle the callback route
  app.get("/auth/google/callback", passport.authenticate("google"));
};
