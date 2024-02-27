var express = require("express");
var router = express.Router();

// Créer une instance de user.
const User = require("../models/user");

// afficher la liste des users.
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, null, { sort: { _id: -1 } });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
