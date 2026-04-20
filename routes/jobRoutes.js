const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createJob, getJobs } = require("../controllers/jobController");

router.post("/", auth, createJob);
router.get("/", getJobs);

module.exports = router;
