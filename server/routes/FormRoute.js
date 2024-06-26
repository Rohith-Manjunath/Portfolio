const express = require("express");
const { Forms, Home } = require("../controllers/FormController");
const router = express.Router();

router.route("/").get(Home);
router.route("/form").post(Forms);

module.exports = router;
