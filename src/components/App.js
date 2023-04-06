import image from './../img/rick.jpeg';
import './../styles/App.css';
import {useState} from "react"
import Characters from './Characters';

function App() {
 const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    console.log(characters);
    setCharacters(characterApi.results);
   
    
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       <Characters/>
       <img 
       src={image} 
       alt="Rick & Morty" 
       style={{ width:'200px', height:'auto'}}
       className="img-home"></img>
      <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
