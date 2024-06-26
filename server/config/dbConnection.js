const mongoose = require("mongoose");

exports.dbConnection = (uri) => {
  try {
    mongoose.connect(uri).then((data) => {
      console.log(
        "Database connected successfully to host",
        data?.connection?.host
      );
    });
  } catch (e) {
    console.log(e.message);
  }
};
