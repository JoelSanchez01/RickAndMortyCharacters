document.addEventListener("DOMContentLoaded", function(event) {

  const url = "https://rickandmortyapi.com/api/character";

  const appNode = document.querySelector(".personajes-Container");
  const input = document.querySelector('.TituloContainer__form--input');
  
  const fetchData = async (API, texto) => {
    const conectar = await window.fetch(API);
    const respuesta = await conectar.json();
    const todos = [];
    

      try {
        respuesta.results.forEach((element) => {
          
          const imagen = document.createElement("img");
          imagen.src = element.image;

          const Name = document.createElement("h4");
          Name.className = "Name";
          Name.textContent = element.name;

          const Status = document.createElement("p");
          Status.className = "Status";
          Status.textContent = element.status;

          const Location = document.createElement("p");
          Location.className = "Location";
          Location.textContent = element.location.name;

          const Gender = document.createElement("p");
          Gender.className = "Gender";
          Gender.textContent = element.gender;

          const Specie = document.createElement("p");
          Specie.className = "Specie";
          Specie.textContent = element.species;

          const container = document.createElement("div");
          container.className = "personajes-Container--card";

          

          container.append(imagen, Name, Status, Location, Gender, Specie);
          todos.push(container);

          if (element.id == 20) fetchData(`${url}?page=2`);
          else if (element.id == 40) fetchData(`${url}?page=3`);
          else if (element.id == 60) fetchData(`${url}?page=4`);
          else if (element.id == 80) fetchData(`${url}?page=5`);
        

        });

        appNode.append(...todos);
      } catch (error) {
        console.error(error);
      }
    
  };

  fetchData(url);

  let hola = '';

  const Buscar = (event) => {

    if(event.data == null) {
      const Tarjetas = document.querySelectorAll('.personajes-Container--card');
      Tarjetas.forEach((elemento) => {
        appNode.removeChild(elemento);
      });
      hola = input.value;
      console.log(hola);
     fetchData(url);
    }
    else {
      const Tarjetas = document.querySelectorAll('.personajes-Container--card');
      Tarjetas.forEach((elemento) => {
        appNode.removeChild(elemento);
      }); 
      hola+=event.data;
      
      fetchData(`${url}/?name=${hola}`);
    }
    
  }


  input.addEventListener('input', Buscar);




});