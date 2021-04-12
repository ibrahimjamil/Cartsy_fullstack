const {Sequelize}=require('sequelize')

module.exports= new Sequelize('cartsy', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});