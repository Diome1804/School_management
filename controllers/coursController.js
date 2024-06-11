const Cours = require('../models/cours');
const Filiere = require('../models/filiere');
const Professeur = require('../models/professeur');

exports.getAllCours = async (req, res) => {
    try {
        const cours = await Cours.findAll();
        res.render('cours', { cours });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showAddForm = async (req, res) => {
    try {
        const filieres = await Filiere.findAll();
        const professeurs = await Professeur.findAll();
        res.render('addCours', { filieres, professeurs });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCours = async (req, res) => {
    try {
        await Cours.create(req.body);
        res.redirect('/cours');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const cours = await Cours.findByPk(req.params.id);
        const filieres = await Filiere.findAll();
        const professeurs = await Professeur.findAll();
        if (cours) {
            res.render('editCours', { cours, filieres, professeurs });
        } else {
            res.status(404).json({ error: 'Cours non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editCours = async (req, res) => {
    try {
        const cours = await Cours.findByPk(req.params.id);
        if (cours) {
            await cours.update(req.body);
            res.redirect('/cours');
        } else {
            res.status(404).json({ error: 'Cours non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCours = async (req, res) => {
    try {
        const cours = await Cours.findByPk(req.params.id);
        if (cours) {
            await cours.destroy();
            res.redirect('/cours');
        } else {
            res.status(404).json({ error: 'Cours non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
