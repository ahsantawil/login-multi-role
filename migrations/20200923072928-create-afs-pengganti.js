'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('afs_penggantis', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER(15)
      },
      sn_klaim: {
        type: Sequelize.STRING(15)
      },
      no_klaim: {
        type: Sequelize.STRING(50)
      },
      uiw: {
        type: Sequelize.STRING(50)
      },
      area: {
        type: Sequelize.STRING(50)
      },
      tgl_kirim: {
        type: Sequelize.STRING(25)
      },
      garansi: {
        type: Sequelize.STRING(25)
      },
      no_spb: {
        type: Sequelize.STRING(50)
      },
      type: {
        type: Sequelize.STRING(25)
      },
      qty: {
        type: Sequelize.INTEGER(10)
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
    await queryInterface.dropTable('afs_penggantis');
  }
};