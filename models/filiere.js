const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cours = require('./cours');

const Filiere = sequelize.define('Filiere', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Filiere.hasMany(Cours, { as: 'cours', foreignKey: 'filiereId' });
Cours.belongsTo(Filiere, { as: 'filiere', foreignKey: 'filiereId' });

module.exports = Filiere;
