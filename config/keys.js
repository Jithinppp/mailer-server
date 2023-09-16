// decide dev or prod to choose key from
// process.env.NODE_ENV gives which environment currently we are
if (process.env.NODE_ENV === "production") {
  // we are now on production environment so use prod keys!!!
  module.exports = require("./prod");
} else {
  // we are on dev environment so use dev keys!!!
  module.exports = require("./dev");
}
