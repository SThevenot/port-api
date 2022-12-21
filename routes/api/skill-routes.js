const router = require("express").Router();
const {
  getSkills,
} = require("../../controllers/projectController");

router.route("/").get(getSkills);


module.exports = router;