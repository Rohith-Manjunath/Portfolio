const mongoose = require("mongoose");
const validator = require("validator");

const FormData = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [30, "Name must be at most 30 characters"],
    uppercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  subject: { type: String, required: [true, "Please enter your subject"] },
  message: { type: String, required: [true, "Please enter your message"] },
});

const Form = mongoose.model("Form", FormData);
module.exports = Form;
