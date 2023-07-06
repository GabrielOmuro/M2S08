const { connection } = require('../database/connection');
const { Model, DataTypes } = require('sequelize');


class Contracts extends Model {

  static associate(models) {
    this.belongsTo(models.companies,{
      foreignKey: "company_id"
    }),
    this.belongsTo(models.trainees,{
      foreignKey: "trainees_id"
    }),
    this.belongsTo(models.category),{
      foreignKey: "category_id"
    }
  }
}

Contracts.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  trainee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Trainees',
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories',
      key: 'id'
    }
  },
  company_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Companies',
      key: 'id'
    }
  },
  start_validity: DataTypes.DATEONLY,
  end_validity: DataTypes.DATEONLY,
  status: DataTypes.BOOLEAN,
  remuneration: DataTypes.FLOAT,
  extra: DataTypes.FLOAT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
  },
 {
  underscored: true, 
  sequelize: connection,
  modelName: 'Contracts',
});



module.exports = { Contracts }