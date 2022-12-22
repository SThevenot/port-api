const router = require("express").Router();
const {
  getSkills,
} = require("../../controllers/skillController");

router.route("/").get(getSkills);


module.exports = router;