'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_delivery.init({
    no_spb: DataTypes.STRING,
    no_do: DataTypes.STRING,
    tgl_kirim: DataTypes.STRING,
    garansi: DataTypes.STRING,
    uiw: DataTypes.STRING,
    area: DataTypes.STRING,
    type: DataTypes.STRING,
    qty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_delivery',
  });
  return afs_delivery;
};