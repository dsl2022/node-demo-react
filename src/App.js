import axios from 'axios';
import './App.css';

async function getData(){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'localhost:5000/all-pokemons',    
  };
  const result = await axios.request(config)
  return result  
}


function App() {
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
