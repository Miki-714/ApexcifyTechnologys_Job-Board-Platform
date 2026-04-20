const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Candidate = require("../models/Candidate");
const Employer = require("../models/Employer");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const Model = role === "Employer" ? Employer : Candidate;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new Model({ name, email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET);
  res.status(201).json({ token });
};
