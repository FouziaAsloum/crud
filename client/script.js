let xiao = document.getElementById('xiao')
let url = 'http://localhost:8000/all';

fetch(url)
  .then(response => {
    console.log(response);
    response.json()
      .then(data => {
        console.log(data.data)
        data.forEach(element => {
          resultat.innerHTML += `<tr>
                                    <td>${element.nom}</td>
                                    <td>${element.prenom}</td>
                                    <td>${element.adresse}</td>
                                    <td>${element.code_postal}</td>
                                    <td>${element.ville}</td>
                                    <td>${element.telephone}</td>
                                    <td>${element.email}</td>
                                    <td><button class="btngreen" id="${element.id}">Modifier </button></td>
                                    <td><button class="btnred" id="${element.id}">Supprimer </button></td>
                                    </tr>`;
        });

      })
  })

  .catch(error => console.error(error));
console.log(xiao);


function addUser(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement

  // Récupérer les valeurs du formulaire
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const adresse = document.getElementById("adress").value;
  const code_postal = document.getElementById("cp").value;
  const ville = document.getElementById("ville").value;
  const telephone = document.getElementById("tel").value;
  const email = document.getElementById("email").value;

  // Créer un nouvel élément de liste
  const li = document.createElement("li");
  li.textContent = `Nom ${nom}, Prénom ${prenom}, Adresse ${adresse}, Code postal ${code_postal}, Ville ${ville}, Téléphone ${telephone}, Email ${email}`;

  // Ajouter l'élément de liste à la liste des utilisateurs
  document.getElementById("userList").appendChild(li);

  // Réinitialiser le formulaire
  document.getElementById("userData").reset();
}
// Écouter l'événement de soumission du formulaire et appeler la fonction addUser
document.getElementById("userData").addEventListener("submit", addUser);