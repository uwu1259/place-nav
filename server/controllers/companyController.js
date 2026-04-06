const Company = require("../models/company");
const Question = require("../models/question"); // Required for .populate("questions") to work
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().select("-questions");
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getCompanyDetails = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate("questions");
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    res.json(company);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Company not found" });
    }
    res.status(500).send("Server Error");
  }
};
