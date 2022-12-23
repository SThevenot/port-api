/** @format */

const { Skill } = require("../models");

module.exports = {
  getSkills(req, res) {
    Skill.find()
      .then((skills) => res.json(skills))
      .catch((err) => res.json(500).json(err));
  },
};
