const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
  applyToJob,
  getMyApplications,
  getJobApplications,
} = require("../controllers/appController");

router.post("/apply/:jobId", auth, upload.single("resume"), applyToJob);
router.get("/my-applications", auth, getMyApplications);
router.get("/jobs/:jobId/applications", auth, getJobApplications);

module.exports = router;
