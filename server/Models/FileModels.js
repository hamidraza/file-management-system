const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  uuid: String,
  fileType: String,
  fileSize: Number,
  fileExtension: String,
  path: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const File = mongoose.models.File || mongoose.model("File", fileSchema);

module.exports = File;
