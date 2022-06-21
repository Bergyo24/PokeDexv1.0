import {Pokemons} from './components/Pokemons.js';
function App() {
  return (
    <div style={{position:'relative'}}>
      <header style={{height: '10vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center',backgroundColor:'#282c34', position:'absolute', marginBottom:'10vh'}}>
        <figure style={{width:'auto', height:'10vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={require("./pokeball.png")} alt="PokeBall" style={{width:'100%', height:'auto'}} />
        </figure>
        <h1 style={{textAlign: 'center', color:'white'}}>PokeDeX <span style={{fontSize:'1rem'}}>By Bergyo</span></h1>
      </header>
      <main style={{position:'absolute', top:'10vh', width:'100%', height:'90vh', overflow:'auto'}}>
        <Pokemons />
      </main>
    </div>
  );
}

export default App;
