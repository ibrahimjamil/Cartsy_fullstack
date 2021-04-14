'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img:{
        type: Sequelize.STRING, 
    },
    price:{
        type: Sequelize.STRING, 
    },
    title:{
        type: Sequelize.STRING, 
    },
    description:{
        type: Sequelize.TEXT, 
    },
    categories:{
        type: Sequelize.STRING, 
    },
    categoriesId:{
        type: Sequelize.STRING, 
    },
    subCategoriesid:{
        type: Sequelize.STRING, 
    },
    tags:{
        type: Sequelize.STRING, 
    },
    quantity:{
        type: Sequelize.INTEGER, 
    },
    createdAt:{
      type:Sequelize.TEXT,
    },
    updatedAt:{
      type:Sequelize.TEXT
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};