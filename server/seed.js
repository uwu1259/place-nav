const mongoose = require("mongoose");
const fs = require("fs");

// Import your models (make sure the paths match where your model files are)
const Company = require("./models/company.js");
const Question = require("./models/question.js");

// Load the generated JSON data
const companiesData = JSON.parse(fs.readFileSync("./companies.json", "utf-8"));
const questionsData = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));

// Load environment variables
require("dotenv").config();

// Apply the same DNS fix used in your server.js
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// MongoDB connection string - Use the one from .env instead of local fallback
const MONGO_URI = process.env.MONGO_URI;

// Helper function to flatten the strict MongoDB JSON format {"$oid": "..."} into a string
const extractObjectId = (val) => {
  if (val && typeof val === "object" && val.$oid) {
    return val.$oid;
  }
  return val;
};

const seedDatabase = async () => {
  try {
    console.log("Connecting to the database...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected successfully!");

    // 1. Clear existing data to prevent duplicates on multiple runs
    console.log("Clearing existing data...");
    await Company.deleteMany({});
    await Question.deleteMany({});

    // 2. Format the data to make it Mongoose-friendly
    const formattedCompanies = companiesData.map((company) => ({
      ...company,
      _id: extractObjectId(company._id),
      questions: company.questions.map(extractObjectId),
    }));

    const formattedQuestions = questionsData.map((question) => ({
      ...question,
      _id: extractObjectId(question._id),
      companies: question.companies.map(extractObjectId),
    }));

    // 3. Insert the data
    console.log("Seeding Companies...");
    await Company.insertMany(formattedCompanies);
    
    console.log("Seeding Questions...");
    await Question.insertMany(formattedQuestions);

    console.log(`Successfully seeded ${formattedCompanies.length} companies and ${formattedQuestions.length} questions!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

// Execute the seed function
seedDatabase();