const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

// Route pour afficher toutes les notes
router.get('/', notesController.getAllNotes);

// Route pour afficher le formulaire d'ajout de note
router.get('/ajouter', notesController.showAddForm);

// Route pour ajouter une nouvelle note
router.post('/ajouter', notesController.createNote);

// Route pour afficher le formulaire de modification de note
router.get('/:id/modifier', notesController.showEditForm);

// Route pour modifier une note
router.post('/:id/modifier', notesController.editNote);

// Route pour supprimer une note
router.post('/:id/supprimer', notesController.deleteNote);

module.exports = router;
