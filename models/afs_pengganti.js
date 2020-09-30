'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_pengganti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_pengganti.init({
    sn_klaim: DataTypes.STRING,
    no_klaim: DataTypes.STRING,
    uiw: DataTypes.STRING,
    area: DataTypes.STRING,
    tgl_kirim: DataTypes.STRING,
    garansi: DataTypes.STRING,
    no_spb: DataTypes.STRING,
    type: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'afs_pengganti',
  });
  return afs_pengganti;
};