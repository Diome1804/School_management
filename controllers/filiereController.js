const Filiere = require('../models/filiere');

exports.getAllFilieres = async (req, res) => {
    try {
        const filieres = await Filiere.findAll();
        res.render('filieres', { filieres });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showAddForm = (req, res) => {
    res.render('addFiliere');
};

exports.createFiliere = async (req, res) => {
    try {
        await Filiere.create({ nom: req.body.nom });
        res.redirect('/filieres');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const filiere = await Filiere.findByPk(req.params.id);
        if (filiere) {
            res.render('editFiliere', { filiere });
        } else {
            res.status(404).json({ error: 'Filière non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editFiliere = async (req, res) => {
    try {
        const filiere = await Filiere.findByPk(req.params.id);
        if (filiere) {
            await filiere.update({ nom: req.body.nom });
            res.redirect('/filieres');
        } else {
            res.status(404).json({ error: 'Filière non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFiliere = async (req, res) => {
    try {
        const filiere = await Filiere.findByPk(req.params.id);
        if (filiere) {
            await filiere.destroy();
            res.redirect('/filieres');
        } else {
            res.status(404).json({ error: 'Filière non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
