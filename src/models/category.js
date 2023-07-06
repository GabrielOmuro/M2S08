const { connection } = require('../database/connection');
const { Model, DataTypes } = require('sequelize');


class Categories extends Model {}

Categories.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  },
 {
  underscored: true,
  sequelize: connection,
  modelName: 'Categories',
});

module.exports = { Categories }