'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_fis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_fis.init({
    tgl_assembly: DataTypes.STRING,
    tgl_calibrasi: DataTypes.STRING,
    tgl_gi: DataTypes.STRING,
    tgl_packing: DataTypes.STRING,
    no_box: DataTypes.STRING,
    no_spb: DataTypes.STRING,
    tgl_kirim: DataTypes.STRING,
    consumer: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_fis',
  });
  return afs_fis;
};