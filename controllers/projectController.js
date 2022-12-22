/** @format */

const { Project, Skill } = require("../models");

module.exports = {
  getProjects(req, res) {
    Project.find()
      .then((projects) => res.json(projects))
      .catch((err) => res.json(500).json(err));
  },
  getProjectReact(req, res) {
    Project.find({ category: "React" })
      .then((projects) => res.json(projects))
      .catch((err) => res.json(500).json(err));
  },
};
