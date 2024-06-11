const User = require('../models/users');


exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { username, password, role } = req.body;

    // Vérifier si un administrateur existe déjà
    const adminExists = await User.findOne({ where: { role: 'admin' } });

    // Si un administrateur existe déjà, empêcher l'inscription avec le rôle d'administrateur
    if (adminExists && role === 'admin') {
        res.send('Error: Only one admin allowed in the system.');
        return;
    }

    // Créer l'utilisateur avec le rôle spécifié
    await User.create({ username, password, role: role || 'user' });
    res.redirect('/login');
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });

    if (user) {
        if (user.role === 'admin') {
            return res.redirect('/admin');
        } else {
            return res.redirect('/user');
        }
    } else {
        res.send('Invalid username or password');
    }
};
exports.logout = (req, res) => {
    // Détruire la session

            // Rediriger vers la page de connexion après la déconnexion
            res.redirect('/login');
};

