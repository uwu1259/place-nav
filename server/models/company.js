const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  industry: {
    type: String,
  },
  website: {
    type: String,
  },
  logoUrl: {
    type: String,
  },
  recruitmentRoles: [{
    type: String,
  }],
  // Array of questions from the Question model entities
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  }],
  averagePackage: {
    type: Number, // Storing package in LPA (Lakhs Per Annum) for analytics
  },
  noOfStudentsPlaced: {
    type: Number,
    default: 0,
  },
  // Mongoose needs Array of Number, not Float32Array explicitly
  allOffers: [{
    type: Number,
    default: 0,
  }],

});

module.exports = mongoose.model("Company", CompanySchema);