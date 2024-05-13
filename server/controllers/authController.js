const bcrypt = require("bcryptjs");
const User = require("../models/userModels");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(createError(400, "User already exists"));
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  //   let email = req.body.email.trim().toLowerCase();
  //   const user = await User.findOne({ email });
  //   console.log("testing 1", email);
  //   console.log("testing 1", user);

  try {
    console.log("Email received:", req.body.email);
    const user = await User.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    });
    console.log("User found:", user);

    if (!user) {
      console.log("No user found for:", req.body.email);
      return next(createError(404, "User not found"));
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("Password validation result:", isPasswordValid);
    if (!isPasswordValid) {
      return next(createError(401, "Invalid email or password"));
    }

    const token = jwt.sign({ id: user._id }, "secretkey123", {
      expiresIn: "90d",
    });

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};
