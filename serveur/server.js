require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');

//Connexion à la base de données
const connectDB = require('./config/db');

//Middlewares
const app = express();

//Use app  express
app.use(express.json());

//Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use cors
app.use
  (cors({
    origin: 'http://127.0.0.1:5000',
    optionsSuccessStatus: 200,
  })
  );

//Ecrire bonjour dans le navigateur
app.get('/', (req, res) => {
  res.send('XIAO');
})

//Routes
app.use('/', userRoutes);

//Config et lancement du serveur
const start = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 5500;
    app.listen(port, () => {
      console.log(`Le serveur à démarré sur le port ${port}`);
    })
  } catch {
    console.log('Erreur lors du démarrage du serveur');
  }
};

start();