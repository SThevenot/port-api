/** @format */

const router = require("express").Router();
const {
  getProjects,
  getProjectReact,
} = require("../../controllers/projectController");

router.route("/").get(getProjects);

router.route("/:category").get(getProjectReact);

module.exports = router;
