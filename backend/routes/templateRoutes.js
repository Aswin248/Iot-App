const express = require("express");
const router = express.Router();
const templateController = require("../controllers/templateController");
const authMiddleware = require("../middleware/authMiddleware");

// All routes protected with JWT
router.post("/", authMiddleware, templateController.createTemplate);
router.get("/", authMiddleware, templateController.getTemplatesByUser);
router.delete("/:id", authMiddleware, templateController.deleteTemplate);

module.exports = router;
