'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     // FK for trainees
     trainee_id: {
       type: Sequelize.INTEGER,
       references: {
         model: 'Trainees',
         key: 'id'
       }
     },
     // FK for categories
     category_id: {
       type: Sequelize.INTEGER,
       references: {
         model: 'Categories',
         key: 'id'
       }
     },
     // FK for companies
     company_id: {
       type: Sequelize.INTEGER,
       references: {
         model: 'Companies',
         key: 'id'
       }
     },
     start_validity: Sequelize.DATEONLY,
     end_validity: Sequelize.DATEONLY,
     status: Sequelize.BOOLEAN,
     remuneration: Sequelize.FLOAT,
     extra: Sequelize.FLOAT,
     created_at: Sequelize.DATE,
     updated_at: Sequelize.DATE
     },
    {
     sequelize: 'connection',
     modelName: 'Contracts',
   });
    },

 async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Contracts');
 }
};
