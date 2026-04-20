const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    requirements: [String],
    salaryRange: String,
    location: String,
    jobType: {
      type: String,
      enum: ["Full-time", "Remote"],
      default: "Full-time",
    },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Job", jobSchema);
