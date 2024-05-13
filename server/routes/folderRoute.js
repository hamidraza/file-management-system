const express = require("express");
const Folder = require("../Models/FoldersModels");
const upload = require("../middleware/multerConfig");
const router = express.Router();
const File = require("../Models/FileModels");
const path = require("path");

router.post("/folders", upload.array("files"), async (req, res) => {
  console.log("files = ", req.files);
  console.log("body = ", req.body);
  const { folderName, parentFolder } = req.body;
  try {
    const files = req.files.map((file) => {
      return new File({
        filename: file.originalname,
        uuid: file.filename,
        fileType: file.mimetype,
        fileSize: file.size,
        fileExtension: path.extname(file.originalname),
      });
    });

    const fileDocuments = await File.insertMany(files); // Save all file info to DB
    const fileIds = fileDocuments.map((file) => file._id);

    const newFolder = new Folder({
      folderName,
      parentFolder,
      files: fileIds,
    });

    const savedFolder = await newFolder.save();
    res.status(201).send(savedFolder);
  } catch (error) {
    console.error("Failed to save files or folder:", error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/folders", (req, res) => {
  // Assuming you have some logic to fetch folders from a database
  Folder.find({})
    .then((folders) => res.json(folders))
    .catch((err) => res.status(500).json({ error: "Internal server error" }));
});

router.get("/folders/:folderId", async (req, res) => {
  try {
    const folderId = req.params.folderId;
    const folder = await Folder.findById(folderId); // Find the folder by ID

    if (!folder) {
      return res.status(404).send("Folder not found");
    }

    const files = await File.find({
      _id: { $in: folder.files }, // Retrieve all files that have IDs listed in the folder's files array
    });

    res.status(200).json(files); // Send the file details as a response
  } catch (error) {
    res.status(500).send("Error retrieving folder contents");
  }
});

module.exports = router;
