const Notes = require('../models/notes');
const Etudiant = require('../models/etudiant');
const Cours = require('../models/cours');

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll();
        res.render('notes', { notes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showAddForm = async (req, res) => {
    try {
        const etudiants = await Etudiant.findAll();
        const cours = await Cours.findAll();
        res.render('addNote', { etudiants, cours });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createNote = async (req, res) => {
    try {
        await Notes.create(req.body);
        res.redirect('/notes');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        const etudiants = await Etudiant.findAll();
        const cours = await Cours.findAll();
        if (note) {
            res.render('editNote', { note, etudiants, cours });
        } else {
            res.status(404).json({ error: 'Note non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editNote = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (note) {
            await note.update(req.body);
            res.redirect('/notes');
        } else {
            res.status(404).json({ error: 'Note non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (note) {
            await note.destroy();
            res.redirect('/notes');
        } else {
            res.status(404).json({ error: 'Note non trouvée' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
