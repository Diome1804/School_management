const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cours = require('../models/cours');

const Evaluation = sequelize.define('Evaluation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Evaluation.belongsTo(Cours, { as: 'cours', foreignKey: 'coursId' });

module.exports = Evaluation;
