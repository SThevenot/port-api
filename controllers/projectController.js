/** @format */

const { Project } = require("../models");

module.exports = {
  getProjects(req, res) {
    Project.find()
      .then((projects) => res.json(projects))
      .catch((err) => res.json(500).json(err));
  },
  getProjectReact(req, res) {
    Project.find({ $filter: category })
      .then((projects) => res.json(projects))
      .catch((err) => res.json(500).json(err));
  },
};
