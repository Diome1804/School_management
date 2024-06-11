const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Etudiant = require('../models/etudiant');
const Cours = require('../models/cours');

const Matiere = sequelize.define('Matiere', {
    valeur: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    appreciation: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Matiere.belongsTo(Etudiant, { as: 'etudiant', foreignKey: 'etudiantId' });
Matiere.belongsTo(Cours, { as: 'cours', foreignKey: 'coursId' });

module.exports = Matiere;
