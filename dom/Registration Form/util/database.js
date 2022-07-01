const Sequelize = require('sequelize')

const sequelize = new Sequelize('registrationForm', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize