const boton = document.querySelector('#boton');
const input = document.querySelector('#numero');
const parrafo = document.querySelector('#nombre');
const url = 'https://rickandmortyapi.com/api/character'


boton.addEventListener('click', () =>{
    const num = input.value;
    fetchData(url, num);
});

const fetchData  =  async (API, ID) => {
    const conectar = await window.fetch(API);
    const respuesta = await conectar.json();
    const todos = [];


   try{
        var bandera = false;
        var nombre;
        respuesta.results.forEach(element => {
            
            console.log('Conectado!');
            
        });
        

    }catch(error){
        console.error(error);
    }
}




