const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// Register a new user
const createUser = (req, res) => {
  // utilise req.body de body-parser
  const { nom, prenom, adresse, code_postal, ville, telephone, email } = req.body;
  // vérifier si les champs sont remplis
  if (!nom || !prenom || !adresse || !code_postal || !ville || !telephone || !email) {
    return res.status(400).json({
      error: 'donnée manquante',
    })
  }
  const query = 'INSERT INTO user (nom, prenom, adresse, code_postal, ville, telephone, email ) VALUES (?,?,?,?,?,?,?)';
  conn.query(query, [nom, prenom, adresse, code_postal, ville, telephone, email], (err) => {
    if (err) { // on utilise l'une des deux fonctions suivantes
      console.error('erreur lors de l\'insertion des données : ' + err);
      res.status(500).json({ error: 'erreur lors de l\'insertion des données' });
    } else {
      res.status(200).json({ message: 'utilisateur enregistré' });
    }
  });
};

module.exports = {
  createUser,
};