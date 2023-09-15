const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating schema for model
const userSchema = new Schema({
  googleId: String,
});
// creating (collection-name,schema-of-collection)
mongoose.model("users", userSchema);
