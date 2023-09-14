const keys = require("../config/keys");
const passport = require("passport");

// 1.creating passport strategy instance with callbackURL and two keys
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  // this will be pointed "google" when we use passport.authenticate("google")
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
    }
  )
);
