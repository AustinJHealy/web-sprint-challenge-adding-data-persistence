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
  return db("tasks")

}
function getProjectTasks(project_id) {
  return db("projects as p")
  .where("p.id", project_id)
    .select("p.id as project_id", "p.project_name as project_name", "p.description as project_description", "t.notes as task_notes", "t.completed_status")
    .innerJoin("tasks as t", "p.id", "t.project_id")
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
  getProjectTasks,
  insertTask,
};