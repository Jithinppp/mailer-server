const keys = require("../config/keys");
const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");
// 1.creating passport strategy instance with callbackURL and two keys
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// serializing user with passport
passport.serializeUser((user, done) => {
  // taking the user.id and make that into token
  // generating a token to make cookie with mongodb id(user.id)
  done(null, user.id);
});

// deserializing user with passport
passport.deserializeUser((id, done) => {
  // taking the token and make that into modal back
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  // this will be pointed "google" when we use passport.authenticate("google")
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      // query if db already the user exist or not
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // user already in db
          // call done to inform passport authentication completed done(no error put null,data to be send)
          done(null, existingUser);
        } else {
          // no user in db create one
          new User({
            googleId: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
