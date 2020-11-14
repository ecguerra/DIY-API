'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  episodes.init({
    ep_num: DataTypes.INTEGER,
    title: DataTypes.STRING,
    directedBy: DataTypes.STRING,
    writtenBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'episodes',
  });
  return episodes;
};