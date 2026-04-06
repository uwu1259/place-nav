const express = require("express");
const router = express.Router();
const { getAllQuestions } = require("../controllers/questionController");

// @route   GET api/questions
// @desc    Get all questions
// @access  Public
router.get("/", getAllQuestions);

module.exports = router;
