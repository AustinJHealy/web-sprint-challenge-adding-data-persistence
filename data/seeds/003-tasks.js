
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
      {
          task_description: "Brainstorm",
          notes: "Let the ideas flow",
          completed_status: 0,
          project_id: 1
        },
        {
          task_description: "Create an algorithm",
          notes: "map out the flow of your program",
          completed_status: 0,
          project_id: 2
        }
      ]);
    });
};
