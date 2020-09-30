'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('afs_klaims', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER(15)
      },
      uiw: {
        type: Sequelize.STRING(50)
      },
      area: {
        type: Sequelize.STRING(50)
      },
      no_klaim: {
        type: Sequelize.STRING(25)
      },
      status: {
        type: Sequelize.STRING(25)
      },
      no_surat: {
        type: Sequelize.STRING(50)
      },
      produksi: {
        type: Sequelize.STRING(15)
      },
      type: {
        type: Sequelize.STRING(25)
      },
      qty: {
        type: Sequelize.STRING(15)
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
    await queryInterface.dropTable('afs_klaims');
  }
};