const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const fileRoutes = require("./routes/fileRoute");
const folderRoutes = require("./routes/folderRoute");
const File = require("./Models/FileModels");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api", fileRoutes);
app.use("/api", folderRoutes);
// app.use("/api/folders", folderRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/fileUploader")
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.error("Failed to connect to Mongodb", err);
  });

// Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to the File Upload Server!");
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
