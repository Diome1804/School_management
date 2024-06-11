const express = require('express');
const router = express.Router();
const filiereController = require('../controllers/filiereController');

// Route pour afficher toutes les filières
router.get('/', filiereController.getAllFilieres);

// Route pour afficher le formulaire d'ajout de filière
router.get('/ajouter', filiereController.showAddForm);

// Route pour ajouter une nouvelle filière
router.post('/ajouter', filiereController.createFiliere);

// Route pour afficher le formulaire de modification de filière
router.get('/:id/modifier', filiereController.showEditForm);

// Route pour modifier une filière
router.post('/:id/modifier', filiereController.editFiliere);

// Route pour supprimer une filière
router.post('/:id/supprimer', filiereController.deleteFiliere);

module.exports = router;
