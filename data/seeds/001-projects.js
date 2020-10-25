exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Invention",
          description: "This is a project dedicated to inventions",
          completed_status: 0,
        },
        {
          project_name: "Apps",
          description: "This project is for creating new applications",
          completed_status: 0,
        },
      ]);
    });
};
