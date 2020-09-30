'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('afs_fis', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER(25)
      },
      tgl_assembly: {
        type: Sequelize.STRING(25)
      },
      tgl_calibrasi: {
        type: Sequelize.STRING(25)
      },
      tgl_gi: {
        type: Sequelize.STRING(25)
      },
      tgl_packing: {
        type: Sequelize.STRING(25)
      },
      no_box: {
        type: Sequelize.STRING(25)
      },
      no_spb: {
        type: Sequelize.STRING(50)
      },
      tgl_kirim: {
        type: Sequelize.STRING(25)
      },
      consumer: {
        type: Sequelize.STRING(50)
      },
      type: {
        type: Sequelize.STRING(25)
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
    await queryInterface.dropTable('afs_fis');
  }
};