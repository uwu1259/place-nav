const express = require("express");
const router = express.Router();
const { getCompanies, getCompanyDetails } = require("../controllers/companyController");

// @route   GET api/companies
// @desc    Get all companies
// @access  Public (or update with auth middleware if needed)
router.get("/", getCompanies);

// @route   GET api/companies/:id
// @desc    Get company details with questions
// @access  Public
router.get("/:id", getCompanyDetails);

module.exports = router;
