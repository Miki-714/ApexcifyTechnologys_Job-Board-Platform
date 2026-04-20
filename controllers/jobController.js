const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  if (req.user.role !== "Employer")
    return res.status(403).json({ error: "Forbidden" });
  const job = new Job({ ...req.body, postedBy: req.user.id });
  await job.save();
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const { location, jobType, keyword } = req.query;
  let filters = {};
  if (location) filters.location = location;
  if (jobType) filters.jobType = jobType;
  if (keyword) filters.title = { $regex: keyword, $options: "i" };

  const jobs = await Job.find(filters).populate("postedBy", "name");
  res.json(jobs);
};
