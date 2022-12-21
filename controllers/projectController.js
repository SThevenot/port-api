/** @format */

const { Project, Skill } = require("../models");

module.exports = {
  getProjects(req, res) {
    Project.find()
      .then((projects) => red.json(projects))
      .catch((err) => res.json(500).json(err));
  },
  getProjectBySkill(req, res) {
    Project.find({ _id: req.params.projectId })
      .select("-__v")
      .then((project) =>
        !project
          ? res.status(404).json({ message: "no project with that id found" })
          : res.json(project)
      )
      .catch((err) => res.status(500).json(err));
  },
};
