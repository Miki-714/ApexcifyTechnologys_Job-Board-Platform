const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  companyDescription: String,
  password: { type: String, required: true }, // For login
});

module.exports = mongoose.model("Employer", employerSchema);
