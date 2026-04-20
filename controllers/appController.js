const Application = require("../models/Application");

exports.applyToJob = async (req, res) => {
  if (req.user.role !== "Candidate")
    return res.status(403).json({ error: "Only candidates can apply" });
  const application = new Application({
    job: req.params.jobId,
    candidate: req.user.id,
    resumeURL: req.file.path,
  });
  await application.save();
  res.status(201).json(application);
};

exports.getMyApplications = async (req, res) => {
  const apps = await Application.find({ candidate: req.user.id }).populate(
    "job",
  );
  res.json(apps);
};

exports.getJobApplications = async (req, res) => {
  const apps = await Application.find({ job: req.params.jobId }).populate(
    "candidate",
    "name email",
  );
  res.json(apps);
};
