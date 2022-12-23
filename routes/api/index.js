/** @format */

const router = require("express").Router();
const projectRoutes = require("./project-routes");
const skillRoutes = require("./skill-routes");

router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);

module.exports = router;
