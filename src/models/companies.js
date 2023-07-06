const { connection } = require('../database/connection');
const { Model, DataTypes } = require('sequelize');


class Companies extends Model {}

Companies.init({
  cnpj: DataTypes.STRING,
  conpany_name: DataTypes.STRING,
  contact: DataTypes.STRING,
  cep: DataTypes.STRING,
  address: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  rh_analyst_name: DataTypes.STRING,
  supervisor_name: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  underscored: true, 
  sequelize: connection,
  modelName: 'Companies',
});

module.exports = { Companies }