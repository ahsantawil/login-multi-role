'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_klaim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_klaim.init({
    uiw: DataTypes.STRING,
    area: DataTypes.STRING,
    no_klaim: DataTypes.STRING,
    status: DataTypes.STRING,
    no_surat: DataTypes.STRING,
    produksi: DataTypes.STRING,
    type: DataTypes.STRING,
    qty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_klaim',
  });
  return afs_klaim;
};