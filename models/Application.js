const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    resumeURL: { type: String, required: true },
    status: {
      type: String, // Ensure this is String, NOT [String]
      enum: [
        "Pending",
        "Reviewed",
        "Interviewing",
        "Accepted",
        "Rejected",
        "Withdrawn",
      ],
      default: "Pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
