let url = 'http://localhost:8000/all';

// fetch(url)
//   .then(response => {
//     console.log(response);
//     response.json()
//       .then(data => {
//         console.log(data.data)
//         data.forEach(element => {
//           resultat.innerHTML += `<tr>
//                                     <td>${element.nom}</td>
//                                     <td>${element.prenom}</td>
//                                     <td>${element.adresse}</td>
//                                     <td>${element.code_postal}</td>
//                                     <td>${element.ville}</td>
//                                     <td>${element.telephone}</td>
//                                     <td>${element.email}</td>
//                                     <td><button class="update" id="${element.id}">Modifier </button></td>
//                                     <td><button class="delete" id="${element.id}">Supprimer </button></td>
//                                     </tr>`;
//         });

//       })
//   })

//   .catch(error => console.error(error));
// console.log(xiao);


// function addUser(event) {
//   event.preventDefault(); // Empêche le formulaire de se soumettre normalement

//   // Récupérer les valeurs du formulaire
//   const nom = document.getElementById("nom").value;
//   const prenom = document.getElementById("prenom").value;
//   const adresse = document.getElementById("adress").value;
//   const code_postal = document.getElementById("cp").value;
//   const ville = document.getElementById("ville").value;
//   const telephone = document.getElementById("tel").value;
//   const email = document.getElementById("email").value;

//   const userData = {
//     nom,
//     prenom,
//     adresse,
//     code_postal,
//     ville,
//     telephone,
//     email
//   }

//   const response = fetch("http://localhost:8000/register", {
//     method: "POST",
//     headers: { "content-type": "application/json" },

//     body: JSON.stringify(userData)
//   })

//   modalForm.reset();
//   closeModale();

//   window.location.reload()


//   // // Créer un nouvel élément de liste
//   // const li = document.createElement("li");
//   // li.textContent = `Nom ${nom}, Prénom ${prenom}, Adresse ${adresse}, Code postal ${code_postal}, Ville ${ville}, Téléphone ${telephone}, Email ${email}`;

//   // // Ajouter l'élément de liste à la liste des utilisateurs
//   // document.getElementById("userList").appendChild(li);

//   // Réinitialiser le formulaire
//   // document.getElementById("modal").reset();
// }

// const openModale = () => {
//   const modale = document.getElementById("xiao");
//   modale.style.display = "block";
// }

// const openModaleButton = document.getElementById("add");
// openModaleButton.addEventListener("click", openModale);


// // const closeModale = () => {
// //   const modale = document.getElementById("xiao");
// //   modale.style.display = "none";
// // }

//Récupérer les utilisateurs depuis le backend

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Affiche les utilisateurs dans le tableau
    displayUsers(data.result);
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
      displayUsers(data.result);
    })
    .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
};



const displayUsers = (users) => {
  const usersTableBody = document.getElementById('resultat');
  if (!Array.isArray(users)) {
    // Si users n'est pas un tableau, le transformer en tableau contenant l'objet unique
    users = [users];
  }


  // Parcours les utilisateurs et ajoute chaque ligne au tableau
  users.forEach((user) => {
    const row = document.createElement('tr');

    // Ajoute chaque champ de l'utilisateur en tant que cellule dans la ligne
    const fields = ['nom', 'prenom', 'adresse', 'code_postal', 'ville', 'telephone', 'email'];
    fields.forEach((field) => {
      // Vérifier si la clé est différente de "id"
      if (field !== "id") {
        const cell = document.createElement('td');
        cell.textContent = user[field];
        row.appendChild(cell);
      }
    });
    // const openEditModal = (user) => {
    //   const editModal = document.getElementById('editModal');
    //   editModal.style.display = 'block';

    //   // Remplir le formulaire avec les données de l'utilisateur
    //   const editUserForm = document.getElementById('editUserForm');
    //   editUserForm.elements["Nom"].value = user.Nom;
    //   editUserForm.elements["Prénom"].value = user.Prenom;
    //   editUserForm.elements["Adresse"].value = user.Adresse;
    //   editUserForm.elements["Code postal"].value = user.Codepostal;
    //   editUserForm.elements["Ville"].value = user.Ville;
    //   editUserForm.elements["Téléphone"].value = user.Telephone;
    //   editUserForm.elements["Email"].value = user.email;

    //   const userId = user.id;
    //   editUserForm.dataset.userId = userId;
    // };

    // // Bouton Modifier
    // const editButtonCell = document.createElement('td');
    // const editButton = document.createElement('button');
    // editButton.textContent = "Modifier";
    // editButton.classList.add('editbutton');
    // editButton.addEventListener('click', () => {
    //   openEditModal(user);
    // });
    // editButtonCell.appendChild(editButton);
    // row.appendChild(editButtonCell);



    // // Bouton Supprimer
    // const deleteButtonCell = document.createElement('td');
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = "Supprimer";
    // deleteButton.classList.add('suppbutton');
    // deleteButton.addEventListener('click', () => {
    //   deleteUser(user.id);
    // });
    // deleteButtonCell.appendChild(deleteButton);
    // row.appendChild(deleteButtonCell);

    usersTableBody.appendChild(row);
  });
};


