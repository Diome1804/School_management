const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Professeur = require('../models/professeur');

const Cours = sequelize.define('Cours', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Cours.belongsTo(Professeur, { as: 'professeur', foreignKey: 'professeurId' });
Professeur.hasMany(Cours, { foreignKey: 'professeurId' });

module.exports = Cours;
