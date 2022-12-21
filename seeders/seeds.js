/** @format */
const db = require("../config/connection");
const { Project, Skill } = require("../models");
const projectSeeds = require("./projectData.json");
const skillSeeds = require("./skillData.json");

db.once("open", async () => {
  await Skill.deleteMany({});
  await Skill.create(skillSeeds);
  await Project.deleteMany({});

  await Project.create(projectSeeds);

  console.log("all done!");
  process.exit(0);
});
