import image from './../img/rick.jpeg';
import './../styles/App.css';
import {useState} from "react"
import Characters from './Characters';

function App() {
 const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
   
    
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
       ):(
        <>
           <img 
            src={image} 
            alt="Rick & Morty" 
            style={{ width:'200px', height:'auto'}}
            className="img-home"></img>
           <button onClick={reqApi} className="btn-search">Buscar Personaje</button> 
           <br></br>
          
          
        </>
       )}
       
       
      </header>
    </div>
  );
}

export default App;
