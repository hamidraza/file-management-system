const express = require("express");
const File = require("../Models/FileModels");
const upload = require("../middleware/multerConfig");
const path = require("path");

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    const newFile = new File({
      filename: file.originalname,
      uuid: file.filename, // filename is the UUID we assigned in multer config
      fileType: file.mimetype,
      fileSize: file.size,
      path: req.file.path,
      fileExtension: path.extname(file.originalname), // Correctly using path here
    });

    const r = await newFile.save();
    console.log("res", r);
    res.status(201).send({ file: newFile });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/files", async (req, res) => {
  try {
    // Fetch files data from MongoDB
    const files = await File.find().limit(1000);

    // Send files data as JSON response
    res.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
