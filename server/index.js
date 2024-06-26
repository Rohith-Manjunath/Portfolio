const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./config/dbConnection");
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
const FormRoute = require("./routes/FormRoute");
const error = require("./utils/error");

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", FormRoute);
app.use(error);

dbConnection(process.env.URI);

const server = app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

// Handle unhandled rejections
process.on("unhandledRejection", (promise, e, reason) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  console.log(`Shutting down server due to unhandledRejection`);
  console.log(`${e.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (e) => {
  console.log(`Error : ${e.message}`);
  console.log(`Shutting down server due to uncaughtException`);
  server.close(() => {
    process.exit(1);
  });
});
