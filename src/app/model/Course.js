const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, default: "" },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
