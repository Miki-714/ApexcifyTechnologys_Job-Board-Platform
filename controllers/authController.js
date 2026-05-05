const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Candidate = require("../models/Candidate");
const Employer = require("../models/Employer");

// REGISTER Logic
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const Model = role === "Employer" ? Employer : Candidate;

    // Check if user exists
    const existingUser = await Model.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Model({
      name,
      email,
      password: hashedPassword,
      ...(role === "Employer" && {
        companyDescription: req.body.companyDescription,
      }),
    });

    await user.save();
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({ token, msg: `${role} registered successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN Logic
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body; // User specifies if logging in as Employer or Candidate
    const Model = role === "Employer" ? Employer : Candidate;

    // 1. Find user by email
    const user = await Model.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    // 2. Compare Passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // 3. Generate Token
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
