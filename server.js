require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/jobRoutes");
const appRoutes = require("./routes/appRoutes");
const { register } = require("./controllers/authController");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Public Auth Route
app.post("/api/register", register);

// API Routes
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", appRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
