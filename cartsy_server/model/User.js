const Sequelize=require("sequelize")
const SDB=require("../config/database")

const UserSchema={
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    Email:{
        type:Sequelize.STRING,
    },
    Password:{
        type:Sequelize.STRING,
    }
}

const user = SDB.define('Users',UserSchema,{freezeTableName: true,createdAt: false,updatedAt: false,})

module.exports=user