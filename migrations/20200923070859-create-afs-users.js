'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('afs_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      fullname: {
        type: Sequelize.STRING(50)
      },
      username: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(25)
      },
      position: {
        type: Sequelize.STRING(50)
      },
      level: {
        type: Sequelize.INTEGER(5)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('afs_users');
  }
};