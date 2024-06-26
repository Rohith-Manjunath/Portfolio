const Form = require("../models/FormSchema");
const catchAsyncError = require("../utils/catchAsyncError");

exports.Home = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Hello",
  });
});

exports.Forms = catchAsyncError(async (req, res, next) => {
  await Form.create(req.body);
  res.status(200).json({
    success: true,
    message: "Message Sent Successfully",
  });
});
