// let url = 'http://localhost:8000/all';
// let url2 = 'http://localhost:8000/register';


// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // Affiche les utilisateurs dans le tableau
//     displayUsers(data);
//     console.log(data);
//   })
//   .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));




// const refreshTable = () => {
//   // Récupérer les utilisateurs depuis le backend
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // Vider le contenu actuel du tableau
//       const usersTableBody = document.getElementById('resultat');
//       usersTableBody.innerHTML = '';


//       // Afficher les utilisateurs dans le tableau à partir des dernières données
//       displayUsers(data.result);
//     })
//     .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
// };



// const displayUsers = (users) => {
//   const usersTableBody = document.getElementById('resultat');
//   //if (!Array.isArray(users)) {
//   // Si users n'est pas un tableau, le transformer en tableau contenant l'objet unique
//   //   users = [users];
//   // }


//   // Parcours les utilisateurs et ajoute chaque ligne au tableau
//   users.forEach((user) => {
//     const row = document.createElement('tr');
//     const fields = ['nom', 'prenom', 'adresse', 'code_postal', 'ville', 'telephone', 'email'];
//     fields.forEach((field) => {
//       // Vérifier si la clé est différente de "id"
//       if (field !== "id") {
//         const cell = document.createElement('td');
//         cell.textContent = user[field];
//         row.appendChild(cell);
//         usersTableBody.appendChild(row);
//       }
//     });
//   });

// };


// const openModal = () => {
//   const modal = document.getElementById('xiao');
//   modal.style.display = 'block';
// };

// // Fonction pour fermer la modale
// const closeModal = () => {
//   const modal = document.getElementById('xiao');
//   modal.style.display = 'none';
// };

// // Récupérer le bouton pour ouvrir la modale
// const openModalButton = document.getElementById('add');
// // Ajouter un écouteur d'événement pour ouvrir la modale lorsque le bouton est cliqué
// openModalButton.addEventListener('click', openModal);


// // Fonction pour gérer la soumission du formulaire
// const modalForm = document.getElementById('modalForm');
// modalForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const formData = new FormData(modalForm);
//   const userData = {};
//   formData.forEach((value, key) => {
//     userData[key] = value;
//   });

//   const nom = document.getElementById("nom").value;
//   const prenom = document.getElementById("prenom").value;
//   const adresse = document.getElementById("adresse").value;
//   const code_postal = document.getElementById("cp").value;
//   const ville = document.getElementById("ville").value;
//   const telephone = document.getElementById("tel").value;
//   const email = document.getElementById("email").value;

//   refreshTable();
//   modalForm.reset();
//   closeModal();
// });

const url = 'http://localhost:8000/all';
const url2 = 'http://localhost:8000/register';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Affiche les utilisateurs dans le tableau
    displayUsers(data);
  })
  .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));

const refreshTable = () => {
  // Récupérer les utilisateurs depuis le backend
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Vider le contenu actuel du tableau
      const usersTableBody = document.getElementById('resultat');
      usersTableBody.innerHTML = '';


      // Afficher les utilisateurs dans le tableau à partir des dernières données
      displayUsers(data);
    })
    .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
};

const displayUsers = (users) => {
  const usersTableBody = document.getElementById('resultat');
  if (Array.isArray(users)) {
    users.forEach((user) => {
      const row = document.createElement('tr');
      const fields = ['nom', 'prenom', 'adresse', 'code_postal', 'ville', 'telephone', 'email'];
      fields.forEach((field) => {
        // Vérifier si la clé est différente de "id"
        if (field !== "id") {
          const cell = document.createElement('td');
          cell.textContent = user[field];
          row.appendChild(cell);
        }
      });
      usersTableBody.appendChild(row);
    });
  }
};

const openModal = () => {
  const modal = document.getElementById('xiao');
  modal.style.display = 'block';
};

const closeModal = () => {
  const modal = document.getElementById('xiao');
  modal.style.display = 'none';
};

const openModalButton = document.getElementById('add');
openModalButton.addEventListener('click', openModal);

const modalForm = document.getElementById('modalForm');
modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(modalForm);
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // Envoie de la requête POST pour enregistrer l'utilisateur
  fetch(url2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Après l'enregistrement réussi, rafraîchir le tableau pour afficher les données mises à jour
      refreshTable();
    })
    .catch((error) => console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error));

  modalForm.reset();
  closeModal();
});