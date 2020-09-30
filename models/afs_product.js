'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_product.init({
    type_product: DataTypes.STRING,
    spec_product: DataTypes.STRING,
    desc_product: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_product',
  });
  return afs_product;
};