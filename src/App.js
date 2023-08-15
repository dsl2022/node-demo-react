import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [pokemons,setPokemons]=useState([])
  useEffect(()=>{
    function getData(){
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/all-pokemons',    
      };
      try{
         axios.request(config).then(res=>{
          setPokemons(res.data.results)
         })
        
      }catch(e){
        console.log(e)
      }      
    }
    getData()    
  },[])

  const pokemonsRender = pokemons.map(pokemon=><li>{pokemon.name}</li>)
  return (
    <div className="App">
      {pokemonsRender}
    </div>
  );
}

export default App;
