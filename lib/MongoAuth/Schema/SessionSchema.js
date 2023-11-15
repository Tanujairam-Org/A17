const { model, Schema } = require("mongoose");

const schema = new Schema({
  sessionName: {
    type: String,
    required: true,
    unique: true,
  },

  session: String,
});

module.exports = model("sessionschemas", schema);
