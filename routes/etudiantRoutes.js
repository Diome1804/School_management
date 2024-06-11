const express = require('express');
const router = express.Router();
const etudiantController = require('../controllers/etudiantController');

// CRUD routes
router.get('/addEtudiant', etudiantController.showAddForm);
router.post('/addEtudiant', etudiantController.addEtudiant);
//==============
router.get('/etudiants', etudiantController.getAllEtudiants);
router.get('/etudiants/:id', etudiantController.getEtudiantById);
router.post('/etudiants', etudiantController.createEtudiant);
//===============
router.get('/etudiants/:id/editEtudiant', etudiantController.showEditForm);
router.post('/etudiants/:id', etudiantController.editEtudiant);
//===========
router.post('/etudiants/:id/supprimer', etudiantController.deleteEtudiant);
module.exports = router;
