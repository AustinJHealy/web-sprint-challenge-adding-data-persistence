const knex = require("knex");

const config = require("../knexfile");

const db = knex(config.development);


function findProjects() {
  return db("projects");
}

function insertProject(project) {
  return db("projects").insert(project);
}

function findResources() {
  return db("resources");
}

function insertResource(resource) {
  return db("resources").insert(resource);
}

function getAllTasks() {
  return db("tasks");
}

function insertTask(task) {
  return db("tasks").insert(task);
}

module.exports = {
  findProjects,
  insertProject,
  findResources,
  insertResource,
  getAllTasks,
  insertTask,
};