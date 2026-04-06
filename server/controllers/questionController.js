const Question = require("../models/question");

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err.message);
    res.status(500).send("Server Error");
  }
};
