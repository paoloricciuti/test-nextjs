'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rooms.init({
    roomname: DataTypes.STRING,
    slug: DataTypes.STRING,
    order: DataTypes.STRING,
    test: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};