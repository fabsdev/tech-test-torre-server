const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/user");

router.use("/:username", getUser);

module.exports = router;
