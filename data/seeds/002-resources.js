exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Idea",
          resource_description: "The foundation of an invention",
        },
        {
          resource_name: "Programming knowledge",
          resource_description: "Necessary to build applications",
        },
      ]);
    });
};
