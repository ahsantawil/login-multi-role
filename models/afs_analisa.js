'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_analisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_analisa.init({
    identifikasi: DataTypes.STRING,
    resume: DataTypes.STRING,
    desc: DataTypes.STRING,
    action: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_analisa',
  });
  return afs_analisa;
};