'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_consumer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_consumer.init({
    uiw: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_consumer',
  });
  return afs_consumer;
};