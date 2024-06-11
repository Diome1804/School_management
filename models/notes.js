const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Etudiant = require('./etudiant');
const Cours = require('../models/cours');

const Notes = sequelize.define('Notes', {
    valeur: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    appreciation: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
// associations
Notes.belongsTo(Etudiant, { as: 'etudiant', foreignKey: 'etudiantId' });
Notes.belongsTo(Cours, { as: 'cours', foreignKey: 'coursId' });

module.exports = Notes;
