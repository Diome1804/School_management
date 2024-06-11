const express = require('express');
const router = express.Router();
const coursController = require('../controllers/coursController');

// Route pour afficher tous les cours
router.get('/', coursController.getAllCours);

// Route pour afficher le formulaire d'ajout de cours
router.get('/ajouter', coursController.showAddForm);

// Route pour ajouter un nouveau cours
router.post('/ajouter', coursController.createCours);

// Route pour afficher le formulaire de modification de cours
router.get('/:id/modifier', coursController.showEditForm);

// Route pour modifier un cours
router.post('/:id/modifier', coursController.editCours);

// Route pour supprimer un cours
router.post('/:id/supprimer', coursController.deleteCours);

module.exports = router;
