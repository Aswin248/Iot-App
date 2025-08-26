const Template = require("../models/Template");

// Create template
exports.createTemplate = async (req, res) => {
  try {
    const { name, hardware, connection, description } = req.body;
    const userId = req.user.userId; // ✅ get userId from JWT middleware

    const newTemplate = new Template({ userId, name, hardware, connection, description });
    await newTemplate.save();

    res.status(201).json(newTemplate);
  } catch (err) {
    console.error("Create Template Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get templates by logged-in user
exports.getTemplatesByUser = async (req, res) => {
  try {
    const templates = await Template.find({ userId: req.user.userId }); // ✅ use JWT
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete template
exports.deleteTemplate = async (req, res) => {
  try {
    const deleted = await Template.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId, // ✅ ensure user owns it
    });

    if (!deleted) return res.status(404).json({ message: "Template not found or not authorized" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
