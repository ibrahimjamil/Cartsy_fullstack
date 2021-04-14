const Sequelize=require("sequelize")
const SDB=require("../config/database")

const ProductSchema={
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
            type:Sequelize.TEXT
        },
        updatedAt:{
            type:Sequelize.TEXT
        }
} 

const Product=SDB.define("products",ProductSchema,{freezeTableName: true})

module.exports=Product