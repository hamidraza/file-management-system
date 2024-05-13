const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  folderName: String,
  parentFolder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Folder", folderSchema);
