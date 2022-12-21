/** @format */

const router = require("express").Router();
const {
  getProjects,
  getProjectBySkill,
} = require("../../controllers/projectController");

router.route("/").get(getProjects);

router.route("/:skillId").get(getProjectBySkill);

module.exports = router;
