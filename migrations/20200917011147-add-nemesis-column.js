const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.addColumn("heroes", "nemesis", {
      type: Sequelize.STRING
    });

    return models.heroes.bulkCreate(
      [
        { slug: "spider-man", nemesis: "Wilson Fisk" },
        { slug: "captain-america", nemesis: "Red Skull" },
        { slug: "iron-man", nemesis: "Obadiah Stane" },
        { slug: "thor", nemesis: "Loki" },
      ],
      {
        updateOnDuplicate: ["nemesis"],
      }
    );
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn("heroes", "nemesis");
  },
};
