import image from './../img/rick.jpeg';
import './../styles/App.css';

function App() {
  const reqApi = () =>{
    console.log("Clicking");
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
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
