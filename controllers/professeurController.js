// controllers/professeurController.js

const Professeur = require('../models/professeur');

exports.getAllProfesseurs = async (req, res) => {
    try {
        const professeur = await Professeur.findAll();
        res.render('professeurs', { professeur });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showAddForm = (req, res) => {
    res.render('addProfesseur');
};

exports.createProfesseur = async (req, res) => {
    try {
        await Professeur.create(req.body);
        res.redirect('/professeur');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const professeur = await Professeur.findByPk(req.params.id);
        if (professeur) {
            res.render('editProfesseur', { professeur });
        } else {
            res.status(404).json({ error: 'Professeur non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editProfesseur = async (req, res) => {
    try {
        const professeur = await Professeur.findByPk(req.params.id);
        if (professeur) {
            await professeur.update(req.body);
            res.redirect('/professeur');
        } else {
            res.status(404).json({ error: 'Professeur non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProfesseur = async (req, res) => {
    try {
        const professeur = await Professeur.findByPk(req.params.id);
        if (professeur) {
            await professeur.destroy();
            res.redirect('/professeur');
        } else {
            res.status(404).json({ error: 'Professeur non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
