const express = require('express');
const sequelize = require('./config/database');
const etudiantRoutes = require('./routes/etudiantRoutes');
const notesRoute = require('./routes/notes');
const coursRoute = require('./routes/cours');
const filiereRoute = require('./routes/filiere');
const professeurRoutes = require('./routes/professeur');
// Importer les modèles
const Etudiant = require('./models/etudiant');
const Professeur = require('./models/professeur');
const Cours = require('./models/cours');
const Filiere = require('./models/filiere');
const Matiere = require('./models/matiere');
const Notes = require('./models/notes');
const Evaluation = require('./models/evaluation');
const Users = require('./models/users');
// const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
/*// Configuration pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));*/


app.use(authRoutes);
app.use(adminRoutes);
app.use(userRoutes);
app.use(etudiantRoutes);
app.use('/notes', notesRoute);
app.use('/cours', coursRoute);
app.use('/filieres', filiereRoute);
app.use('/professeur', professeurRoutes);

// Route d'accueil
app.get('/', (req, res) => {
    res.render('admin');  // Assurez-vous d'avoir une vue `index.ejs` pour la page d'accueil
});

//==============
sequelize.sync().then(() => {
    console.log('Database & tables synchronized!');
});
//=============
app.listen(1000, () => {
    console.log('Server is running on port 1000');
});
