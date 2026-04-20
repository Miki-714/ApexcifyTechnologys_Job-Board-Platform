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

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { appId } = req.params;

    // 1. Explicitly overwrite the status field
    const updatedApp = await Application.findByIdAndUpdate(
      appId,
      { $set: { status: status } }, // $set ensures the old value is replaced
      { new: true, runValidators: true },
    );

    if (!updatedApp)
      return res.status(404).json({ error: "Application not found" });

    res.json({
      message: `Status shifted to ${status}`,
      application: updatedApp,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
