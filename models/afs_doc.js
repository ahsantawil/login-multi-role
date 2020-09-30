'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class afs_doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  afs_doc.init({
    no_surat: DataTypes.STRING,
    namedoc: DataTypes.STRING,
    document: DataTypes.STRING,
    uiw: DataTypes.STRING,
    area: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'afs_doc',
  });
  return afs_doc;
};