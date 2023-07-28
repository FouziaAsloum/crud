let xiao_mon_homme = document.getElementById('xiao_mon_homme')
let url = 'http://localhost:8000/all';

fetch(url)
  .then(response => {
    console.log(response);
    response.json()
      .then(data => {
        console.log(data.data)
        data.forEach(element => {
          console.log(element);

        })
      })
  })

  .catch(error => console.error(error));
console.log(xiao_mon_homme);