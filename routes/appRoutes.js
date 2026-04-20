const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
  applyToJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus,
} = require("../controllers/appController");

router.post("/apply/:jobId", auth, upload.single("resume"), applyToJob);
router.get("/my-applications", auth, getMyApplications);
router.get("/jobs/:jobId/applications", auth, getJobApplications);
router.patch("/:appId/status", auth, updateApplicationStatus);

module.exports = router;
