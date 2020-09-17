'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('heroes', [
      {
        name: 'Captain America',
        realname: 'Steve Rogers',
        firstappearance: 'Captain America Comics #1',
        slug: 'captain-america',
        nemesis: 'Red Skull'
      }, {
        name: 'Spider-Man',
        realname: 'Peter Parker',
        firstappearance: 'Amazing Fantasy #15',
        slug: 'spider-man',
        nemesis: 'Green Goblin, et al....'
      }, {
        name: 'Iron Man',
        realname: 'Tony Stark',
        firstappearance: 'Tales of Suspense #39',
        slug: 'iron-man',
        nemesis: 'Obadiah Stane'
      }, {
        name: 'Thor',
        realname: 'Thor Odinson',
        firstappearance: 'Journey into Mystery #83',
        slug: 'thor',
        nemesis: 'Loki'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
