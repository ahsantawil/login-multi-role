'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_area.init({
    area: DataTypes.STRING,
    uiw: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'afs_area',
  });
  return afs_area;
};