'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'nemesis',
        'greenGoblin',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'nemesis',
        'blueGoblin',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropColumn('nemesis', 'greenGoblin')
      queryInterface.dropColumn('nemesis', 'blueGoblin')
      //Add reverting commands here.
      //Return a promise to correctly handle asynchronicity.

      //Example:
      //return queryInterface.dropTable('users');
    ]);
  }
};
