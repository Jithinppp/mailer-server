// decide dev or prod to choose key from
// process.env.NODE_ENV gives which enviroment currently we are
if (process.env.NODE_ENV === "prodction") {
  // we are now on production enviroment so use prod keys!!!
  module.exports = require("./prod");
} else {
  // we are on dev enviroment so use dev keys!!!
  module.exports = require("./dev");
}
