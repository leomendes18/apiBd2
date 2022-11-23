const Sequelize = require('sequelize')
const database = require('../database/db')

const Hemonucleo = database.define('hemonucleo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    local:{
        type: Sequelize.JSON,
        allowNull: false
    }
})

module.exports = Hemonucleo