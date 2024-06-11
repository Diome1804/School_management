// routes/professeur.js

const express = require('express');
const router = express.Router();
const professeurController = require('../controllers/professeurController');

router.get('/', professeurController.getAllProfesseurs);
router.get('/ajouter', professeurController.showAddForm);
router.post('/ajouter', professeurController.createProfesseur);
router.get('/:id/modifier', professeurController.showEditForm);
router.post('/:id/modifier', professeurController.editProfesseur);
router.post('/:id/supprimer', professeurController.deleteProfesseur);

module.exports = router;
