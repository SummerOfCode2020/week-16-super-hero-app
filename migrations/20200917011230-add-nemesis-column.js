'use strict';

const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.addColumn('heroes', 'snapped', { type: Sequelize.String, defaultValue:'Bad Guy'})

    return models.heroes.bulkCreate([
      { slug: 'spider-man', nemesis: 'Green Goblin' }
    ], { updateOnDuplicate: ['nemesis'] })
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('heroes', 'nemesis')
  }
}
