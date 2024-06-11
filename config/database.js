const { Sequelize } = require('sequelize');

// Configurer la connexion à la base de données
const sequelize = new Sequelize('Auth', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
