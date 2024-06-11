const Etudiant = require('../models/etudiant');

exports.getAllEtudiants = async (req, res) => {
    try {
        const etudiants = await Etudiant.findAll();
        res.render('etudiants', { etudiants });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//===========
exports.showAddForm = (req, res) => {
    res.render('addEtudiant');
};

exports.addEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.create(req.body);
        res.redirect('/etudiants');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//=========

exports.getEtudiantById = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id);
        if (etudiant) {
            res.render('editEtudiant', { etudiant });
        } else {
            res.status(404).json({ error: 'Étudiant non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.create(req.body);
        res.redirect('/etudiants');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//========================
exports.showEditForm = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id);
        if (etudiant) {
            res.render('editEtudiant', { etudiant });
        } else {
            res.status(404).json({ error: 'Étudiant non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//===============
exports.editEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id);
        if (etudiant) {
            await etudiant.update(req.body);
            res.redirect('/etudiants');
        } else {
            res.status(404).json({ error: 'Étudiant non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id);
        if (etudiant) {
            await etudiant.destroy();
            res.redirect('/etudiants');
        } else {
            res.status(404).json({ error: 'Étudiant non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


