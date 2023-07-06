const { connection } = require('../database/connection');
const { Model, DataTypes } = require('sequelize');


class Trainees extends Model {}

Trainees.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  rg: {
    type: DataTypes.STRING,
    unique: true
  },
  cpf: {
    type: DataTypes.STRING,
    unique: true
  },
  primary_phone_contact: DataTypes.STRING,
  secondary_phone_contact: DataTypes.STRING,
  date_birth: DataTypes.DATE,
  father_name: DataTypes.STRING,
  mother_name: DataTypes.STRING,
  have_special_needs: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  underscored: true,  
  sequelize: connection,
  modelName: 'Trainees',
});

module.exports = { Trainees }