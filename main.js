
const url = 'https://rickandmortyapi.com/api/character'



const fetchData  =  async (API, ID) => {
    const conectar = await window.fetch(API);
    const respuesta = await conectar.json();
    const todos = [];


   try{
        
        respuesta.results.forEach(element => {
            
            console.log(element.image);
            
        });
        

    }catch(error){
        console.error(error);
    }
}

fetchData(url);


