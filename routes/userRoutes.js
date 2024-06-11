const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour le tableau de bord de l'utilisateur
router.get('/user', userController.getDashboard);

// Ajoutez d'autres routes utilisateur si nécessaire

module.exports = router;
